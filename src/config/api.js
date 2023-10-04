const apiHost = import.meta.env.VITE_API_URL
const endpoints = {
  login: { url: '/login', method: 'POST' },
  logout: {url: '/logout', method: 'DELETE'},
  games_index: {url: '/games', method: 'GET'},
  games_search: {url: '/games/search/:term', method: 'GET'}
}
export { apiHost, endpoints }