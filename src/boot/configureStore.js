import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../saga";
import getRootReducer from "./../reducers";
const sagaMiddleware = createSagaMiddleware();

/**
 * Configure store
 */
export default function configureStore() {
  const store = createStore(
    getRootReducer(),
    {},
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  store.subscribe(() => {});

  return store;
}
