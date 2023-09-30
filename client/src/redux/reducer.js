import {
  GET_GAMES,
  SEARCH_GAMES,
  SET_CURRENT_PAGE,
  FILTER_GAMES_BY_GENRE,
} from "./actions";

const initialState = {
  games: [],
  currentPage: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case FILTER_GAMES_BY_GENRE:
      return {
        ...state,
        games: action.payload, 
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SEARCH_GAMES:
      return {
        ...state,
        games: action.payload,
        
      };
    default:
      return state;
  }
};

export default reducer;
