import ApiClient from '../clients/ApiClient'

export const GameIndex = async () => {
  const params = { endpointPath: 'games_index' }
  const response = await ApiClient(params)

  return response.data
}

export const searchGames = async (searchText) => {
  const params = { endpointPath: 'games_search', queryUrl: {term: searchText} }
  const response = await ApiClient(params)
  
  return response.data.map((game) => {
    return {value: game.id.toString(), label: game.name}
  })
}