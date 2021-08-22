const { Router } = require("express");
const urlRouter = Router();
const {
  createUrl,
  findUrl
} = require("./url.controllers");


urlRouter.post("/url/shorten", createUrl);
urlRouter.get("/url/:urlCode", findUrl);

module.exports = urlRouter;
