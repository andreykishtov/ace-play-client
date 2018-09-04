
export const REGISTER = 'register User';
export const REGISTER_FAIL = 'register User failed';
export const REGISTER_SUCCESS = 'register User succesed';


export const registerUser = (id) => dispatch => {
  dispatch({
    type: REGISTER,
    payload: { id }
  });
};

export const registerUserSuccses = (id) => dispatch => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: { id }
  });
};

export const registerUserFailed = (id) => dispatch => {
  dispatch({
    type: REGISTER_FAIL,
    payload: { id }
  });
};
