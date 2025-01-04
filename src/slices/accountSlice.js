import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 1,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action, "action");
      state.amount += +action.payload;
    },
  },
});

console.log("accountSlice", accountSlice);
export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
