const {
  getAllGames,
  getGameByName,
  getGameById,
  createGame,
} = require("../controllers/videogameControllers");

const getVideogameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = name ? await getGameByName(name) : await getAllGames();
    return res.status(200).json(response);
    //return res.send('estas en la ruta de getVideogames')
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getVideogameByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getGameById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const postVideogameHandler = async (req, res) => {
  const {
    ID,
    Nombre,
    Descripcion,
    Plataformas,
    Imagen,
    Fecha_de_lanzamiento,
    Rating,
    Genre,
  } = req.body;
  try {
    const newGame = await createGame(
      ID,
      Nombre,
      Descripcion,
      Plataformas,
      Imagen,
      Fecha_de_lanzamiento,
      Rating,
      Genre, 
    )
    return res
      .status(201)
      .send(`el juego ${newGame.Nombre}  ha sido creado correctamente con el ID ${newGame.ID}`);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getVideogameHandler, getVideogameByIdHandler , postVideogameHandler};
