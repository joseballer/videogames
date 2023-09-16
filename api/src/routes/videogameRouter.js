const { Router } = require("express");
const {
  getVideogameHandler,
  postVideogameHandler,
  getVideogameByIdHandler,
} = require("../handlers/videogameHandlers");
const videogameRouter = Router();

videogameRouter.get("/", getVideogameHandler);
videogameRouter.get("/:id", getVideogameByIdHandler);
//videogameRouter.post("/", postVideogameHandler);
module.exports = videogameRouter;
