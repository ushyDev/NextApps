import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {}
});

export const {} = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;
