import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/reducers/SessionReducer'

import './App.css'
import Login from './components/Login'
import AppContent from './components/AppContent'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.session.currentUser)
  useEffect(() => {
    const userCookie = Cookies.get('userData')
    const userData = userCookie == undefined ? null : JSON.parse(userCookie)
    dispatch(setUser(userData))
  }, [dispatch])

  return (
    <>
      {currentUser ? 
        <AppContent />
      :
        <Login />
      }
    </>
    
  )
}

export default App
