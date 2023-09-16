const axios = require("axios");
const { Videogame } = require("../db.js");
const { API_KEY, GAME_URL } = process.env;
const { Op } = require("sequelize");

// const getGameByName = async (name) => {
const getAllGames = async () => {
  let games = await Videogame.findAll();

  // Fetch the list of Pokémon from the PokeAPI
  const response = await axios.get(`${GAME_URL}?key=${API_KEY}`);
  const gameList = response.data.results;
  // Process the data to create an array of Pokémon objects with specific properties
  const dataGameList = gameList.map((data) => {
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
      id: id,
      Nombre: name,
      Descripcion: description,
      Plataformas: platforms.map((platform) => {
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

  games = [...games, dataGameList];
  return games;
};

const getGameByName = async (name) => {
  const nameLower = name.toLowerCase();
  let games = [];
  games = await Videogame.findAll({
    where: {
      Nombre: {
        [Op.iLike]: `%${nameLower}%`,
      },
    },
    limit: 15,
  });
  const response = await axios.get(
    `${GAME_URL}?search=${nameLower}&key=${API_KEY}`
  );
  const apiVideogames = response.data.results.slice(0, 15);

  const dataGameList = apiVideogames.map((data) => {
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
      id: id,
      Nombre: name,
      Descripcion: description,
      Plataformas: platforms.map((platform) => {
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
  return [...games, dataGameList];
};

const getGameById = async (id) => {
  let game = [];
  const idInt = parseInt(id);
  game = await Videogame.findByPk(idInt);
  if (!game) {
    const response = await axios.get(`${GAME_URL}/${idInt}?key=${API_KEY}`);
    const {
      id,
      name,
      description,
      platforms,
      released,
      rating,
      genres,
      background_image,
    } = response.data;
    game = {
      ID: id,
      Nombre: name,
      Descripcion: description,
      Plataformas: platforms.map((platform) => {
        return { Nombre: platform.platform.name };
      }),
      Imagen: background_image,
      Fecha_de_lanzamiento: released,
      Rating: rating,
      Generos: genres.map((genre) => {
        return { Nombre: genre.name };
      }),
    };
  }
  return game;
};

module.exports = { getAllGames, getGameByName, getGameById };
