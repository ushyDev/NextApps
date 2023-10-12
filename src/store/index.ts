import { createSlice, configureStore } from '@reduxjs/toolkit';
import { MIN_VALUE, MAX_VALUE } from '../config';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    intervalID: null
  },
  reducers: {
    increment: (state) => {
      if (state.value < MAX_VALUE) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > MIN_VALUE) {
        state.value -= 1;
      }
    },
    setIntervalID: (state, action) => {
      state.intervalID = action.payload
    } 
  }
});

export const {increment, decrement, setIntervalID} = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;
