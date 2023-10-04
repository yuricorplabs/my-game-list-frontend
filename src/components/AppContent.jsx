import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

import ContentHeader from './content_header/ContentHeader'
import GameList from './game/GameList'

export default function AppContent() {
  return (
    <div className='w-screen bg-slate-50'>
      <Layout className='bg-inherit' >
        <ContentHeader />
        <Content>
          <GameList />
        </Content>
      </Layout>
    </div>
  )
}