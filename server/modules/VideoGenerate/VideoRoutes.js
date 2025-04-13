const express = require('express')
const { generate, downloadVideo } = require('./VidoeController')
const { userAuth } = require('../../middleware/AuthMiddleware')
const checkMonthlyLimit = require("../../middleware/monthly-check")
const router= express.Router()

router.post('/generate',userAuth,checkMonthlyLimit('video'),generate)
router.post('/download',downloadVideo)

module.exports = router