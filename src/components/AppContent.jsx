import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;
import GameList from './game/GameList'

export default function AppContent() {

  return (
    <div className='w-screen bg-slate-50'>
      <Layout className='bg-inherit' >
        <Header className='text-white px-5'>
          <Row>
            <Col span={8}><div>My Game List</div></Col>
            <Col span={8}><div>Search</div></Col>
            <Col span={8} className='grid justify-items-end'><div>User</div></Col>
          </Row>
        </Header>
        <Content>
          <GameList />
        </Content>
      </Layout>
    </div>
  )
}