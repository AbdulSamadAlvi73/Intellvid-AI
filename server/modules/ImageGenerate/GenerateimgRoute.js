const express = require('express')
const { generateImage, downloadImage } = require('./GenerateImgController')
const { userAuth } = require('../../middleware/AuthMiddleware')
const checkMonthlyLimit = require("../../middleware/monthly-check")
const router= express.Router()

router.post('/generate',userAuth,checkMonthlyLimit('image'),generateImage)
router.post('/download',downloadImage)
module.exports=router