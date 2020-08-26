import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist-indexeddb-storage";

const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage: storage("miNigh")
    // whitelist: ["user"]
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
