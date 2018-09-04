
import { REGISTER,REGISTER_FAIL,REGISTER_SUCCESS } from '../actions/users';

const initialState = {
  isFetching: false,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
   case REGISTER:
    return {
      ...state,
     isFetching: true,
     user: action.payload,
     error: false
    }
    case REGISTER_FAIL:
    return {
      ...state,
      isFetching: false,
      user: null,
      error: action.payload
    }
    case REGISTER_SUCCESS:
    return {
      ...state,
      isFetching: false,
      user: action.payload,
      error: false
    }
   default:
    return state
  }
 }