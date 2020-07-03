const express = require("express");
const MusicRouter = express.Router();
const MusicController = require("controllers/music.controller");

MusicRouter.route("/")
    .get(MusicController.index)
    .post(MusicController.create)

MusicRouter.route("/:id").get(MusicController.read)
    .put(MusicController.update)
    .delete(MusicController.remove)

MusicRouter.route("/checkVideoId")
    .post(MusicController.checkVideoId)

module.exports = MusicRouter;
