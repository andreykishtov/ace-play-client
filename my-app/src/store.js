import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/reducers/RootReducer';
import rootSaga from './state/saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
