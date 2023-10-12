import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      if (state.value < 100) {
        state.value += 1;
      }
    },
  }
});

export const {increment} = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;
