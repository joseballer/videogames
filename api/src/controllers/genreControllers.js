const axios = require("axios");
const { Genre } = require("../db");
const { GENRE_URL, API_KEY } = process.env;

const getAllGenres = async () => {
  let allGenres = await Genre.findAll();
  if (allGenres.length === 0) {
    const response = await axios.get(`${GENRE_URL}?key=${API_KEY}`);
    allGenres = response.data.results.map((genre) => ({
      Nombre: genre.name,
    }));
    await Genre.bulkCreate(allGenres);
  }
  return allGenres;
};

module.exports = {getAllGenres}