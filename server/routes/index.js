const express = require("express");
const router = express.Router();
const dish = require("./dish.route");
const ingredient = require("./ingredient.route");
const cloudinary = require("./cloudinary.route");

router.use("/dish", dish);
router.use("/ingredient", ingredient);
router.use("/cloudinary", cloudinary);

module.exports = router;
