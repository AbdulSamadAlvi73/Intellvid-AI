const stripe = require("stripe")(process.env.stripeKey);
const express = require("express");
const router = express.Router();
const { userAuth } = require("../../middleware/AuthMiddleware");
const { UserModel } = require("../../models/UserModel");
router.post("/create", userAuth, async (req, res, next) => {
  const { planId } = req.body;
  const { email } = req.user;

  const user = await UserModel.findOne({ email });

  if (user && user.stripeCustomerId) {
    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripeCustomerId,
      status: "all",
    });

    if (subscriptions.data.length > 0) {
      const activeSubscription = subscriptions.data.find(
        (sub) => sub.subscriptionStatus === "active"
      );

      if (activeSubscription) {
        return next({
          message: "You already have an active subscription.",
          status: 400,
        });
      }
    }
  }

  let customer;
  if (!user || !user.stripeCustomerId) {
    customer = await stripe.customers.create({
      email,
    });

    if (user) {
      user.stripeCustomerId = customer.id;
      await user.save();
    } else {
      await UserModel.create({ email, stripeCustomerId: customer.id });
    }
  } else {
    customer = { id: user.stripeCustomerId };
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: planId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `http://localhost:5173/dashboard/payment/success?session_id={CHECKOUT_SESSION_ID}`, // Redirect after success
    cancel_url: "http://localhost:5173/dasboard/text-to-script", // Redirect after cancel
    customer: customer.id,
  });

  res.json({ id: session.id });
});
router.get('/payment-details' ,async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    res.json({
      amount_total: session.amount_total, // Amount in cents
      payment_method_types: session.payment_method_types, 
      customer_email: session.customer_details.email, 
    });
  } catch (error) {
    console.error('Error retrieving payment session:', error);
    res.status(500).json({ error: "Failed to fetch payment details" });
  }
});

router.get("/status",userAuth, async (req, res) => {
const {email} = req.user 

  const user = await UserModel.findOne({ email});

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const stripeCustomerId = user.stripeCustomerId;

  const subscriptions = await stripe.subscriptions.list({
    customer: stripeCustomerId,
    status: "all", // active, past_due, canceled, etc.
  });

  const activeSubscription = subscriptions.data.find(
    (sub) => sub.status === "active" || sub.status === "trial"
  );

  const cancelAt = activeSubscription?.cancel_at;
  res.json({
    subscriptionStatus: user.subscriptionStatus,
    subscriptionPlan: user.subscriptionPlan,
    activeSubscription: activeSubscription ? true : false,
    imageGenerationCount: user.imageGenerationCount,
    imageGenerationLimit: user.imageGenerationLimit,
    videoGenerationCount: user.videoGenerationCount,
    videoGenerationLimit: user.videoGenerationLimit,
    facelessGenerationCount : user.facelessGenerationCount,
    facelessGenerationLimit : user.facelessGenerationLimit,
    scriptGenerationCount : user.scriptGenerationCount,
    scriptGenerationLimit : user.scriptGenerationLimit,
    cancelAt,
monthlyResetDate : user.monthlyResetDate
  });
});
// Backend - Node.js (Express)
router.post('/cancel-subscription',userAuth, async (req, res) => {
  const { email } = req.user;
const user = await UserModel.findOne({email})
if(!user){
  return res.status(400).json({ error: 'User not found' });
}
const  stripeCustomerId =user.stripeCustomerId
  try {
    // Find the user's Stripe subscription
    const subscriptions = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      status: 'active',
    });

    if (subscriptions.data.length === 0) {
      return res.status(404).json({ error: 'No active subscription found' });
    }

    const subscriptionId = subscriptions.data[0].id;

    // Cancel the subscription immediately or at the end of the current billing cycle
    await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true, // Set to true to cancel at the end of the current period
    });

    const resetSubscriptionData = {
      subscriptionStatus: 'inactive',
      subscriptionPlan: null,
      imageGenerationCount: 0,
      imageGenerationLimit: 0,
      videoGenerationCount: 0,
      videoGenerationLimit: 0,
      scriptGenerationCount: 0,
      scriptGenerationLimit: 0,
      facelessGenerationCount: 0,
      facelessGenerationLimit: 0,
    };
    
    await UserModel.findOneAndUpdate(
      { stripeCustomerId },
      resetSubscriptionData
    );

    res.status(200).json({ message: 'Subscription cancelled successfully' });
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res.status(500).json({ error: 'Failed to cancel subscription' });
  }
});

module.exports = router;
