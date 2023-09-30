import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from './reducers/SessionReducer'

export default configureStore({
  reducer: {
    session: SessionReducer
  },
})