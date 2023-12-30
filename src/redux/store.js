import { combineReducers, configureStore } from "@reduxjs/toolkit"
import AppSlice from "./slices/appSlice"
import loaderSlice from "./slices/loaderSlice"
import currencySlice from "./slices/currencySlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import homeSlice from "./slices/homeSlice"
import refinefeatureSlice from "./slices/refineFeatureSlice"
import quizSlice from "./slices/quizSlice"
const rootReducer = combineReducers({
  app: AppSlice.reducer,
  loader: loaderSlice.reducer,
  currency: currencySlice.reducer,
  home: homeSlice.reducer,
  refinefeature: refinefeatureSlice.reducer,
  quiz: quizSlice.reducer
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app", "loader", "currency", "home", "refinefeature"] // Add the list of reducers to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store)

export const manualRehydrate = () => {
  persistor.persist()
}
