// import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/users';
import { GET_GAMES, GET_GAMES_SUCCESS } from '../actions/games';

// Our worker Saga: will perform the async increment task
export function* getGame(action) {
  try {
    yield call(api.GET_GAMES, action.payload.id);
    yield put({ type: GET_GAMES_SUCCESS, payload: action.action.payload });
  } catch (error) {
    console.log(error);
  }
}

// Our watcher Saga: spawn a new GET_GAMES task on each INCREMENT_ASYNC
export function* watchGames() {
  yield takeEvery(GET_GAMES, getGame);
}
