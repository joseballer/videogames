const axios = require("axios");
const { Videogame } = require("../db.js");
const { API_KEY, GAME_URL } = process.env;
const { Op } = require("sequelize");

// // const getGameByName = async (name) => {
// const getAllGames = async () => {
//   let games = await Videogame.findAll();

//   // Fetch the list of Pokémon from the PokeAPI
//   const response = await axios.get(`${GAME_URL}?key=${API_KEY}`);
//   const gameList = response.data.results;
//   // Process the data to create an array of Pokémon objects with specific properties
//   const dataGameList = gameList.map((data) => {
//     const {
//       id,
//       name,
//       description,
//       platforms,
//       released,
//       rating,
//       genres,
//       background_image,
//     } = data;
//     return {
//       ID: id,
//       Nombre: name,
//       Descripcion: description,
//       Plataformas: platforms.map((platform) => {
//         return { Nombre: platform.platform.name };
//       }),
//       Imagen: background_image,
//       Lanzamiento: released,
//       Rating: rating,
//       Generos: genres.map((genre) => {
//         return { Nombre: genre.name };
//       }),
//     };
//   });

//   games = [...games, dataGameList];
//   return games;
//};
const getAllGames = async () => {
  let games = await Videogame.findAll();

  // Necesitamos 8 páginas para obtener 120 juegos
  for (let i = 1; i <= 10; i++) {
    // Fetch the list of games from the RAWG API
    const response = await axios.get(
      `${GAME_URL}?key=${API_KEY}&page=${i}&page_size=15`
    );
    const gameList = response.data.results;
    // Process the data to create an array of game objects with specific properties
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
        ID: id,
        Nombre: name,
        Descripcion: description,
        Plataformas: platforms.map((platform) => {
          return { Nombre: platform.platform.name };
        }),
        Imagen: background_image,
        Lanzamiento: released,
        Rating: rating,
        Generos: genres.map((genre) => {
          return { Nombre: genre.name };
        }),
      };
    });

    games = [...games, ...dataGameList];
  }

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

  games = [...games, ...dataGameList];
  return games;
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

const createGame = async (
  ID,
  Nombre,
  Descripcion,
  Plataformas,
  Imagen,
  Fecha_de_lanzamiento,
  Rating,
  Genre,
) => {
  const newGame = await Videogame.create({
    ID,
    Nombre,
    Descripcion,
    Plataformas,
    Imagen,
    Fecha_de_lanzamiento,
    Rating,
  });
  Genre.forEach((genre) => {
    newGame.addGenre(genre); 
  });
  return newGame; 
};

module.exports = { getAllGames, getGameByName, getGameById, createGame };
