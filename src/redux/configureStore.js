import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import moviesReducer from "./Movies";

const persistConfig = {
  key: "moviesStorage",
  storage,
  whitelist: ["moviesReducer"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    moviesReducer,
  })
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
