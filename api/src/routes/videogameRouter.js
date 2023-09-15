const { Router } = require("express");
const { getVideogameHandler,
postVideogameHandler,
getVideogameByIdHandler,
getVideogameByNameHandler,} = require("../handlers/videogameHandlers")
const videogameRouter = Router();



videogameRouter.get("/", getVideogameHandler);
videogameRouter.get("/:id", getVideogameByIdHandler);
videogameRouter.get("/:name", getVideogameByNameHandler);
//videogameRouter.post("/", postVideogameHandler);
module.exports = videogameRouter;
