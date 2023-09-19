import { GET_GAMES, GET_GAMES_BY_GENRE, SEARCH_GAMES} from "./actions";

const initialState = {
  games :[],
 
  
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAMES_BY_GENRE:
      return {
        ...state,
        games: action.payload,
      };
      case SEARCH_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }

}

export default reducer;
