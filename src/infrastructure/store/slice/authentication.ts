import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthentication: (state) => {
      state.isAuthenticated = true;
    },
    resetAuthentication: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthentication, resetAuthentication } =
  authentication.actions;

export default authentication.reducer;
