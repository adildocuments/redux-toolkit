import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const decrement = createAction("reward/decrement");
const initialState = {
  points: 10,
};

export const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(decrement, (state, action) => {
      state.points--;
    });
});
