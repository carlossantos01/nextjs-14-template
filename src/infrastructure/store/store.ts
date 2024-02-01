import { api } from "@/data/api/apiConfig";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import account from "./slice/account";
import authentication from "./slice/authentication";

export const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  authentication,
  account,
});

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
