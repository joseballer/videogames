const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter = require("./videogameRouter");
const genreRouter = require("./genreRouter");
const router = Router();

router.use("/videogames", videogameRouter);
router.use("/genres", genreRouter);

module.exports = router;
