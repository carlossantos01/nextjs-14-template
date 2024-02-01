import { accountApi } from "@/data/endpoints/accountApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthUtils from "../../utils/authUtils";
import { setAuthentication } from "../slice/authentication";

export const prepareApp = createAsyncThunk(
  "startup/prepareApp",
  (_, thunkApi) => {
    const token = AuthUtils.getAuthToken();
    //#TODO: CASO NÃO TENHA TOKEN, REDIRECIONAR PARA O LOGIN?
    if (token) {
      thunkApi.dispatch(accountApi.endpoints.getAccount.initiate());
      thunkApi.dispatch(setAuthentication());
    }
  }
);
