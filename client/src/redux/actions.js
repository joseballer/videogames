import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const FILTER_GAMES_BY_GENRE = "FILTER_GAMES_BY_GENRE";

export const getGames = () => {
  return async (dispatch) => {
    const games = await axios.get("http://localhost:3001/videogames");
    dispatch({ type: GET_GAMES, payload: games.data });
  };
};

export const filterGamesByGenre = (genre) => {
  return (dispatch, getState) => {
    const games = getState().games;
    const filteredGames = games.filter((game) =>
      game.Generos.some((g) => g.Nombre === genre)
    );
    dispatch({ type: FILTER_GAMES_BY_GENRE, payload: filteredGames });
  };
};


export const searchGame = (name) => {
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

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
