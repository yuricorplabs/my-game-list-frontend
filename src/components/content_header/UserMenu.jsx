import React from 'react'
import { useSelector } from 'react-redux'

import { Avatar, Dropdown, Typography } from 'antd';
const { Link, Text } = Typography;
import { logout } from '../../client_wrappers/LoginWrapper'

export default function UserMenu() {
  const currentUser = useSelector((state) => state.session.currentUser)
  
  const userAvatar = () => {
    const currentUserLetters = currentUser.name.match(/^([a-zA-Z]).*\s([a-zA-Z]).*$/)
    return currentUserLetters.slice(1,3).join('')
  }

  const items = [
    {
      key: '1',
      label: (
        <Link rel="noopener noreferrer" onClick={logout}>
          Logout
        </Link>
      ),
    },
  ]

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <Link>
        <Avatar className='bg-white text-black'>
          <Text>{userAvatar()}</Text>
        </Avatar>
      </Link>
    </Dropdown>
  )
}