const express = require('express')
const { generate, downloadVideo } = require('./VidoeController')
const router= express.Router()

router.post('/generate',generate)
router.post('/download',downloadVideo)

module.exports = router