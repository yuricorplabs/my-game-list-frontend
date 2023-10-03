import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from './reducers/SessionReducer'
import GameReducer from './reducers/GameReducer'

export default configureStore({
  reducer: {
    session: SessionReducer,
    game: GameReducer
  },
})