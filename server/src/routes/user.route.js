const express = require("express");
const UserRouter = express.Router();
const UserController = require("controllers/user.controller");

UserRouter.route("/create").get(UserController.create);
UserRouter.route("/").get(UserController.read);
UserRouter.route("/delete").get(UserController.remove);

module.exports = UserRouter;
