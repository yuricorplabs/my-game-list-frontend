import React, { useEffect } from 'react'
import { Table } from 'antd';

import { useDispatch, useSelector } from 'react-redux'
import { setGames } from '../../redux/reducers/GameReducer'

import { GameIndex } from '../../client_wrappers/GameWrapper'

export default function GameList(){
  const dispatch = useDispatch()
  const games = useSelector((state) => state.game.games)

  useEffect(() => {
    GameIndex().then((responseData) => {
      dispatch(setGames(responseData))
    })
  }, [dispatch])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
      key: 'publisher',
    },
  ]
  
  return (
    <>
      <h1>Logged!</h1>
      <Table dataSource={games} columns={columns} rowKey={ record => record.id }/>
    </>
  )
}