import { GET_GAMES, GET_GAMES_FAIL, GET_GAMES_SUCCESS } from '../actions/games';

const initialState = {
  isFetching: false,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        isFetching: true,
        user: action.payload,
        error: false
      };
    case GET_GAMES_FAIL:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.payload
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: false
      };
    default:
      return state;
  }
};
