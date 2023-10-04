import React from 'react'
import { Space, Layout } from 'antd';
const { Header, Content } = Layout;
import GameList from './game/GameList'

export default function AppContent() {

  return (
    <Space direction="vertical" align='center' className='flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0'>
      <Layout className='p-10'>
        <Header>
          test
        </Header>
        <Content>
          <GameList />
        </Content>
      </Layout>
    </Space>
  )
}