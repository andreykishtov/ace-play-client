import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/RootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
}
