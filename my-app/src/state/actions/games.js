export const GET_GAMES = 'GET_GAMES';
export const GET_GAMES_FAIL = 'GET_GAMES failed';
export const GET_GAMES_SUCCESS = 'GET_GAMES succesed';

export const GetGames = id => dispatch => {
  dispatch({
    type: GET_GAMES,
    payload: { id }
  });
};

export const GetGamesSuccses = id => dispatch => {
  dispatch({
    type: GET_GAMES_SUCCESS,
    payload: { id }
  });
};

export const GetGamesFailed = id => dispatch => {
  dispatch({
    type: GET_GAMES_FAIL,
    payload: { id }
  });
};
