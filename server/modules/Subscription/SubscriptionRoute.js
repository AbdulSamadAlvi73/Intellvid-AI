const stripe = require('stripe')(process.env.stripeKey)
const express = require('express')
const router = express.Router()

router.get('/subscribe',async(req,res)=>{
    const sessions = await stripe.checkout.sessions.create({
        mode:'subscription',
        line_items :[]
    })
})

module.exports = router