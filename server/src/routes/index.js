const express = require("express");
const router = express.Router();
const user = require("routes/user.route");
const music = require("routes/music.route");
const dish = require("routes/dish.route");
const ingredient = require("routes/ingredient.route");
const cloudinary = require("routes/cloudinary.route");

router.use("/users", user);
router.use("/musics", music);
router.use("/dish", dish);
router.use("/ingredient", ingredient);
router.use("/cloudinary", cloudinary);

module.exports = router;
