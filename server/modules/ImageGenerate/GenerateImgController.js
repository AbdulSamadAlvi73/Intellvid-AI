const { LumaAI } = require("lumaai");
const fs = require("fs");
const fetch = require("node-fetch");
const { UserModel } = require("../../models/UserModel");
const ImageModel = require("../../models/ImageModel");
require("dotenv").config();

const client = new LumaAI({
  authToken: process.env.LUMAAI_API_KEY,
});

module.exports.generateImage = async (req, res,next) => {
  try {
    const { prompt } = req.body;
    const {_id} = req.user
    const user = await UserModel.findById(_id)
if(!user){
    return next({message:"User not found"})
}

    console.log("Received Prompt:", prompt);

    let generation = await client.generations.image.create({ prompt });

    while (generation.state !== "completed") {
      if (generation.state === "failed") {
        console.error("Generation failed:", generation.failure_reason);
        return res.status(500).json({ error: generation.failure_reason });
      }
      console.log("Generating image... waiting...");
      await new Promise((r) => setTimeout(r, 3000));
      generation = await client.generations.get(generation.id);
    }
    // ✅ Corrected way to access image URL
    if (!generation.assets || !generation.assets.image) {
      return res.status(500).json({ error: "No image assets found from Luma API" });
    }

    const imageUrl = generation.assets.image;
    if(imageUrl){
     const storeimage = await ImageModel.create({
        imageId:generation.id,
        imageUrl,
     })
     await storeimage.user.push(_id)
     storeimage.save()
     console.log("Generated Image URL:", imageUrl);
    return res.json({ message: "Image generated successfully!", imageUrl });
    }
  } catch (error) {
    console.error( error);
return next({message:"Error in Image Generation",status:400})
}
};
const axios = require('axios');

module.exports.downloadImage = async (req, res, next) => {
  try {
    // Extract imageUrl from the request body
    const { imageUrl } = req.body;

    // Check if imageUrl is provided
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    // Fetch the image from the external URL
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer', // Handle binary data
    });

    // Check if the response is valid
    if (!response.data || response.status !== 200) {
      throw new Error('Failed to fetch image');
    }

    // Set headers to force download
    res.setHeader('Content-Disposition', `attachment; filename="${imageUrl.split('/').pop()}"`);
    res.setHeader('Content-Type', response.headers['content-type']);

    // Send the image data
    res.send(response.data);
  } catch (err) {
    console.error('Backend error:', err);
    res.status(500).json({ error: 'Failed to download image' });
  }
};