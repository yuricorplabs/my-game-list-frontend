import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { searchGames } from '../../client_wrappers/GameWrapper'

export default function HeaderSearch() {
  const [options, setOptions] = useState([])
  
  const getOptions = async (searchText) => {
    if(searchText.length < 3) return []

    const searchResult = await searchGames(searchText)
    const searchOptions = [{label: 'Games', options: searchResult}]
    setOptions(searchOptions)
  }

  return (
    <AutoComplete
      onSearch={getOptions}
      onSelect={globalThis.console.log}
      popupClassName="certain-category-search-dropdown"
      popupMatchSelectWidth={500}
      style={{
        width: 250,
      }}
      options={options}
    >
      <Input.Search size="large" placeholder="Search Games" />
    </AutoComplete>
  )
}