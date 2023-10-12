import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {}
})

export const { } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})

