const router = require('express').Router()
const CloudinaryService = require('../services/cloudinary.service')

router
    .route('/')
    .post(CloudinaryService.upload)

module.exports = router