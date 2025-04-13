const express = require('express')
const router = express.Router()
const {OpenAI} = require( "openai");
const { UserModel } = require('../../models/UserModel');
const ChatModel = require('../../models/Chatmodel');
const { userAuth } = require('../../middleware/AuthMiddleware');
const checkMonthlyLimit = require("../../middleware/monthly-check")
const client = new OpenAI({apiKey:process.env.OPENAIKEY});
router.post('/generate', userAuth,checkMonthlyLimit('script'), async (req, res, next) => {
    const { script } = req.body;
    const { email } = req.user;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return next({ message: "User not found", status: 400 });
        }

        if(user.subscriptionStatus==='trial'|| user.subscriptionStatus==='active' && user.scriptGenerationLimit===0){
            return next({message:"Please Subscribe to unlock this feature"})
          }
          if(user.subscriptionStatus==='active' && user.scriptGenerationCount>=user.scriptGenerationLimit){
            return next({message:"You have reached Your Credits"})
          }
          if(user.subscriptionStatus==='inactive'){
            return next({message:"Your Susbcription is Over"})
          }  
        // console.log("Script received:", script);
        const completion = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: script,
                },
            ],
        });

        const result = completion.choices[0].message.content;
              const chat = await ChatModel.findOneAndUpdate(
            { user: user._id },  // Find chat by user ID reference
            { $push: { chats: result } },  // Push the new chat into the "chats" array
            { new: true, upsert: true }  // Create a new document if not found
        ).populate('user');  // Populate user data if needed
user.scriptGenerationCount+=1
await user.save()
        return res.status(200).json({ result, chat });
    } catch (error) {
        console.error("Error generating chat:", error);
        return next({ message: "Error generating chat", status: 500 });
    }
});


module.exports = router