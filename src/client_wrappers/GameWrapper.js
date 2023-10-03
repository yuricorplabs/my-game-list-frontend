import ApiClient from '../clients/ApiClient'

export const GameIndex = async () => {
  const params = { endpointPath: 'games_index' }
  const response = await ApiClient(params)

  return response.data
}