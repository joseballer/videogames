const { Router } = require("express");

const videogameRouter = Router();

const { handler } = require("../handlers/videogameHandlers");

videogameRouter.get("/", handler);
videogameRouter.get("/:id", handler);
videogameRouter.get("/name?=:name", handler);
videogameRouter.post("/", handler);
module.exports = videogameRouter;
