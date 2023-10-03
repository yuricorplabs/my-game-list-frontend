import { createSlice } from '@reduxjs/toolkit'

export const GameReducer = createSlice({
  name: 'game',
  initialState: {
    games: [],
    loading: false
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
      state.loading = false
    },
  }
})

export const { setGames } = GameReducer.actions
export default GameReducer.reducer