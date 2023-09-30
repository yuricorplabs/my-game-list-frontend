import React, { useEffect } from 'react'
import Cookies from 'js-cookies'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/reducers/SessionReducer'

import './App.css'
import Login from './components/Login'
import GameList from './components/game/GameList'

import { Layout, Space } from 'antd';
const { Content } = Layout;

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.session.currentUser)
  useEffect(() => {
    const userData = Cookies.getItem('userData')
    
    dispatch(setUser(userData))
  }, [])

  const contentStyle = {
    textAlign: 'center',
    padding: '20%'
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Content style={contentStyle}>
          {currentUser ? 
            <GameList />
          :
            <Login />
          }
        </Content>
      </Layout>
    </Space>
  )
}

export default App
