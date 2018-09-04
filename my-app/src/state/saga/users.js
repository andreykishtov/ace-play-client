// import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/users';
import { REGISTER, REGISTER_SUCCESS } from '../actions/users';

// Our worker Saga: will perform the async increment task
export function* registerUser(action) {
  try {
    console.log(api);
    yield call(api.registerUser, action.payload.id);
    yield put({ type: REGISTER_SUCCESS, payload: action.action.payload });
  } catch (error) {
    console.log(error);
  }
}

// Our watcher Saga: spawn a new registerUser task on each INCREMENT_ASYNC
export function* watchUsers() {
  yield takeEvery(REGISTER, registerUser);
}
