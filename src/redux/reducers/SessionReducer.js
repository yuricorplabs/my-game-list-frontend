import { createSlice } from '@reduxjs/toolkit'

export const SessionReducer = createSlice({
  name: 'session',
  initialState: {
    currentUser: null,
    error: null,
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.error = null
      state.currentUser = action.payload
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
})

export const { setUser, setError } = SessionReducer.actions
export default SessionReducer.reducer