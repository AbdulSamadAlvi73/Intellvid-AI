const { UserModel } = require("../models/UserModel");

module.exports = checkMonthlyLimit = (type) => {
    return async (req, res, next) => {
      try {
        // Find user from the database
        const user = await UserModel.findById(req.user._id);
if(!user.monthlyResetDate || user.monthlyResetDate===null){
    return next()
}
        const now = new Date();  // Current date
        const nextReset = new Date(user.monthlyResetDate); // User's next reset date
  
        // Log the current date and the next reset date
        console.log('Now:', now);
        console.log('Next Reset:', nextReset);
  
        // Reset if the new month has started
        if (now >= nextReset) {
          console.log('Resetting user generation counts...');
  
          // Reset counts
          user.imageGenerationCount = 0;
          user.videoGenerationCount = 0;
          user.facelessGenerationCount = 0;
          user.scriptGenerationCount = 0;
          
          // Set next reset date to 30 days from now
          user.monthlyResetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); 
  
          // Save the user with reset counts
          await user.save();
  
          console.log('User generation counts reset successfully.');
          console.log('Next reset date set to:', user.monthlyResetDate);
        }
  
        // Check limit for the given type (image/video/faceless/script)
        const countKey = `${type}GenerationCount`;
        const limitKey = `${type}GenerationLimit`;
  
        // Log the counts for debugging
        console.log(`${type} Generation Count: ${user[countKey]}`);
        console.log(`${type} Generation Limit: ${user[limitKey]}`);
  
        // If the user has reached the generation limit, respond with an error
        if (!user.subscriptionStatus && user[countKey] >= user[limitKey]) {
          return res.status(403).json({ message: `You’ve reached your monthly ${type} generation limit.` });
        }
  
        // Proceed to the next middleware/route handler
        next();
  
      } catch (error) {
        // Log any errors that occur
        console.error('Error in checkMonthlyLimit middleware:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    };
  };
  
  