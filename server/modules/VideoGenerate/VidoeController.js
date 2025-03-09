const axios =  require('axios')
module.exports.generate = async (req, res , next) => {
  try {
    const {description, videoDuration, agegroup, platform , gender } = req.body;

    console.log("Received Request:", {description, videoDuration, agegroup, platform ,gender});
    if(!description || !videoDuration || !agegroup || !platform || !gender){
        return next({message:"Fill all the fields properly!",status:400})
    }

    const formatDuration =(videoDuration)=> {
      return videoDuration.replace(/\s*seconds?\s*/i, 's');
  }
  const Duration = formatDuration(videoDuration);
const prompt = `${description}. This video is intended for ${platform} and should be suitable for ${agegroup} audiences.for specific gender:${gender}`;
    const response = await axios.post(
        'https://api.lumalabs.ai/dream-machine/v1/generations',
        {
            "prompt": `${prompt}`,
            "model": "ray-2",
            "resolution": "540p",
            "duration": `${Duration}` 
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.LUMAAI_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );
      const videoGenerationId = response.data.id; 
 let generationCompleted = false;
 let videoUrl = null;

 while (!generationCompleted) {
   const statusResponse = await axios.get(
     `https://api.lumalabs.ai/dream-machine/v1/generations/${videoGenerationId}`,
     {
       headers: {
         'Authorization': `Bearer ${process.env.LUMAAI_API_KEY}`,
       }
     }
   );

   if (statusResponse.data.state === "completed") {
     generationCompleted = true;
     videoUrl = statusResponse.data.assets.video;
   } else if (statusResponse.data.state === "failed") {
     throw new Error("Video generation failed.");
   } else {
     console.log("Video is still generating...");
     await new Promise(resolve => setTimeout(resolve, 2000)); 
   }
 }
 return res.json({ message: "Video generated successfully!", videoUrl });  
  } catch (error) {
    console.error("Error generating video:", error);
    return next({message:"Failed to generate the video"})
  }
};


module.exports.downloadVideo = async (req, res, next) => {
  try {
    const { VideoUrl } = req.body;

    if (!VideoUrl) {
      return res.status(400).json({ error: 'Video URL is required' });
    }
    const response = await axios.get(VideoUrl, {
      responseType: 'arraybuffer',
    });

    if (!response.data || response.status !== 200) {
      throw new Error('Failed to fetch video');
    }
    res.setHeader('Content-Disposition', `attachment; filename="${VideoUrl.split('/').pop()}"`);
    res.setHeader('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (err) {
    console.error('Backend error:', err);
  return next({message:"Failed to generate video"})
  }
};