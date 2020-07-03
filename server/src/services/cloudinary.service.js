const cloudinary = require('cloudinary').v2
console.log(process.env)
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const upload = async (req, res) => {
    try {
        cloudinary.uploader.upload(req.body.file, (error, result) => {
            if (error) { console.log(error) }
            console.log(result.secure_url)
            res.send(result.secure_url)
        })
    } catch (err) {
        res.send(err)
    }
}

module.exports = { upload }
