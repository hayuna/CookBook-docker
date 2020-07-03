const express = require("express");
const router = express.Router();
const dish = require("routes/dish.route");
const ingredient = require("routes/ingredient.route");
const cloudinary = require("routes/cloudinary.route");

router.use("/dish", dish);
router.use("/ingredient", ingredient);
router.use("/cloudinary", cloudinary);

module.exports = router;
