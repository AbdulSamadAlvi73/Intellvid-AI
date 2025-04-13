const express = require('express')
const { facelessvideo, downloadVideo } = require('./FacelessVideoController')
const multer = require("multer");
const { userAuth } = require('../../middleware/AuthMiddleware');
const checkMonthlyLimit = require("../../middleware/monthly-check")
const upload = multer();
const router = express.Router()

router.post('/generate',userAuth,checkMonthlyLimit('faceless'),facelessvideo)
router.get('/download',downloadVideo)

module.exports = router