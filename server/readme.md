# AI-Powered Text-to-Video Generation

## Overview
This project allows users to generate faceless videos from text scripts using AI-powered APIs. The workflow involves converting text into images and then compiling them into a video with an AI-generated voiceover. The system is built using the MERN stack and integrates multiple AI services for seamless content creation.

## Features
- **Text-to-Image Generation**: Converts text into relevant AI-generated images.
- **Text-to-Video Compilation**: Compiles generated images into a faceless video with voiceover.
- **Authentication** : User authentication system using JWT and secure password management.
- **Password Reset** : Secure password reset functionality for users.

---

## API Endpoints
### 1. Text-to-Image Generation
**Endpoint:** `POST /api/image/generate`

**Description:**
- Accepts a text script as input.
- Uses AI services ( Luma Labs API) to generate relevant image.
- Returns an array of image URLs.
- Have Download on your Computer button

**Request Body:**
```json
{
  "script": "A futuristic city with flying cars and neon lights."
}
```

**Response:**
```json
{
  "images": [
    "https://generated-image1.com",
    "https://generated-image2.com"
  ]
}
```

---

### 2. Text-to-Video Generation
**Endpoint:** `POST /api/video/generation`

**Description:**
- Accepts a text script.
- Converts text into images.
- Generates AI voiceover using Eleven Labs API.
- Compiles images and voiceover into a video.
- Returns a video URL.

**Request Body:**
```json
{
  "script": "A sunset over the ocean with gentle waves."
}
```

**Response:**
```json
{
  "videoUrl": "https://generated-video.com"
}
```

---

## Authentication 
- **User registration and login with JWT-based authentication.**
- **Protected routes for authorized users.**
- **Token-based session management.**


## Google Base Authentication 
- **User registration and login with there google account**
- **Protected routes for authorized users.**
- **Token-based session management.**

### Password Reset 
- **User requests a password reset link via email.**
- **Secure token-based validation for password reset.**
- **Password update with encryption.**

---

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **AI Services:** Eleven Labs API (Voiceover), Runway API, Luma Labs API (Image & Video Generation)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Aigenration
   ```
2. Install dependencies:
   ```sh
   cd server
   npm install
   ```

3. Set up enviroment variables in `.env` file in client
VITE_SERVER_URL=http://localhost:3000
VITE_FIREBASE_URL= AIzaSyAScalNlZeSIfNy_338mQWK94zcFHtgqcQ

4. Set up environment variables in `.env` file in server:
   ```env
 PORT = 3000
JWTSECRET = HOTDOGS
DBURL = mongodb://127.0.0.1:27017/intellivid
GOOGLE_CLIENT_ID = 233473121618-6kurb711el9hdfp2vbldem7lgej5aki8.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET= 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
EMAIL_PASS  = "nedy ikts jwve tygb"
EMAIL_USER  = Lqmlabs84@gmail.com 
CLIENT_URL = http://localhost:5173/
apikey = key_fd3f905a333bb1f08cc2e5e4811631f1dcc45da749840e4083293a305af2c71b8f36d3f73aee878c796efaff5db60a3687af11b0b679ecb5f77b6ecf6778cf0d
stripeKey = sk_test_51R09ynR91NL0LGqD1V5ElBYbsEIxn0te7X1nPRWfvYZDSb7S9X8J0uN3LS53eiVxVp6mOfWxyVz0IbL6ppsrXKzq005mgTkUde
NODE_ENV = development
LUMAAI_API_KEY = luma-132c9e45-f6fe-4eb2-a2e4-60aa4a8f563f-19657f40-bed5-4dc4-bfe1-7da3ebbc6879
ELEVENLAB_API_KEY = sk_3e45bd658d2cbb9793614fbf7fac407eaf8493d97f85fe39
RUNWAY_API_KEY =key_fd3f905a333bb1f08cc2e5e4811631f1dcc45da749840e4083293a305af2c71b8f36d3f73aee878c796efaff5db60a3687af11b0b679ecb5f77b6ecf6778cf0d


   ```
5. Start the server:
   ```sh
   npx nodemon
   ```

## Future Enhancements
- Add text-to-faceless and text-to script
- Subscription


