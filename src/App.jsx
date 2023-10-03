import React, { useEffect } from 'react'
import Cookies from 'js-cookies'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/reducers/SessionReducer'

import './App.css'
import Login from './components/Login'
import GameList from './components/game/GameList'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.session.currentUser)
  useEffect(() => {
    const userAuthorization = Cookies.getItem('userData.authorization')
    if(userAuthorization == null) {
     dispatch(setUser(null))
    }
    else {
      const userName = Cookies.getItem('userData.name')
      const userData = { name: userName, authorization: userAuthorization }
      dispatch(setUser(userData))
    }
  }, [dispatch])

  return (
    <>
      {currentUser ? 
        <GameList />
      :
        <Login />
      }
    </>
    
  )
}

export default App
