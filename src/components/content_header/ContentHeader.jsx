import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;

import UserMenu from './UserMenu'

export default function ContentHeader() {

  return (
    <Header className='text-white px-5'>
      <Row>
        <Col span={8}><div>My Game List</div></Col>
        <Col span={8}><div>Search</div></Col>
        <Col span={8} className='grid justify-items-end items-center'>
          <UserMenu />
        </Col>
      </Row>
    </Header>
        
  )
}