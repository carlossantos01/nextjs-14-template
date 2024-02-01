import { UserAccount } from "@/domain/model/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserAccount = {};

const account = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<UserAccount>) => {
      return { ...state, ...action.payload };
    },
    resetAccount: () => {
      return initialState;
    },
  },
});

export const { setAccount, resetAccount } = account.actions;

export default account.reducer;
