const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const path = require('path')

const cors = require("cors");

const CookieParser = require("cookie-parser");
const DbConnection = require("../server/config/db");

const UserRouets = require("../server/modules/User/UserAuthRoutes");
const GenerateImage = require('./modules/ImageGenerate/GenerateimgRoute')
const GenerateVideo = require('./modules/VideoGenerate/VideoRoutes')
const errormiddleware = require("./middleware/error-middleware");
app.use(express.json());
app.use(CookieParser());

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public/VideoImages')))
app.use("/api/user", UserRouets);
app.use("/api/image",GenerateImage)
app.use("/api/video",GenerateVideo)
// app.use('/check',(req,res)=>{
//   res.send("hi from server")
// })
app.use(errormiddleware);
DbConnection();
module.exports = app;
