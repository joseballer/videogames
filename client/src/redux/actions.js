import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_BY_GENRE = "GET_GAMES_BY_GENRE";
export const SEARCH_GAMES = "SEARCH_GAMES";

export const getGames = () => {
  return async (dispatch) => {
    const games = await axios.get('http://localhost:3001/videogames');
    dispatch({ type: GET_GAMES, payload: games.data[0] });
  };
};

export const getPokemonByGenre = (genre) => {
  return async (dispatch) => {
    const games = await axios.get(`http://localhost:3001/genre?genre=${genre}`);
    dispatch({ type: GET_GAMES_BY_GENRE, payload: games.data });
  };
};

export const searchPokemon = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    if (response.data.length === 0) {
      window.alert(`No Game was found with the name '${name}'`);
    } else {
      dispatch({ type: SEARCH_GAMES, payload: response.data });
    }
  };
};
