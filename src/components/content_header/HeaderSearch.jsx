import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { searchGames } from '../../client_wrappers/GameWrapper'
import debounce from 'lodash/debounce'

export default function HeaderSearch() {
  const [options, setOptions] = useState([])
  
  const handleSearch = async (searchText) => {
    if(searchText == '') return setOptions([])
    
    const searchResult = await searchGames(searchText)
    const searchOptions = [{label: 'Games', options: searchResult}]
    setOptions(searchOptions)
  }

  return (
    <AutoComplete
      onSearch={debounce(handleSearch, 300)}
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