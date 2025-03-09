const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    select: false,
  },
  createdAt: { type: Date, default: Date.now },
  subscription: {
    status: {
      type: String,
      enum: ["active", "inactive", "trial"],
      default: "trial",
    },
    trialEndDate: {
      type: Date,
      default: () => new Date(new Date().setMonth(new Date().getMonth() + 1)),
    }, // 1 month trial
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar:{
type:String
  },
  googleId:{
type:String
  },
  isVerified :{
    type:Boolean,
    default: false
  },
  otp:{
    type: String,
    default: null
  },
  otpExpires:{
    type:Date,
    default:null
  },
resetPasswordOtp:{
  type:String,
  default:null
}
,
resetPasswordOtpExpires:{
  type:Date,
  default:null
}  
},{timestamps:true});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const generateToken = (user ,res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: "1h" });
  const maxageHours = 1;
    const maxAgeinMilliseconds = maxageHours * 60 * 60 * 1000;
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV==='production',
      sameSite: process.env.NODE_ENV === 'production'?"none":"Lax",
      maxAge: maxAgeinMilliseconds,
    });
    return token
};

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel, generateToken };