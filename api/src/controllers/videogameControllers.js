const axios = require("axios");
const { Videogame } = require("../db.js");
const { API_KEY, GAME_URL } = process.env;

const getAllGames = async () => {
  let games = await Videogame.findAll();

  // Fetch the list of Pokémon from the PokeAPI
  const response = await axios.get(`${GAME_URL}?key=${API_KEY}`);
  const gameList = response.data.results;
  // Process the data to create an array of Pokémon objects with specific properties
  const dataGameList = gameList.map(({ data }) => {
    const {
      id,
      name,
      description,
      platforms,
      released,
      rating,
      genres,
      background_image,
    } = data;
    return {
      ID: id,
      Nombre: name,
      Descripcion: description,
      plataformas: platforms.map((platform) => {
        return { Nombre: platform.platform.name };
      }),
      Imagen: background_image,
      Fecha_de_lanzamiento: released,
      Rating: rating,
      Generos: genres.map((genre) => {
        return { Nombre: genre.name };
      }),
    };
  });

  games = [...games, ...dataGameList];
  return games;
};

module.exports = { getAllGames };