const apiHost = import.meta.env.VITE_API_URL
const endpoints = {
  login: { url: '/login', method: 'POST' },
  games_index: {url: '/games', method: 'GET'}
}
export { apiHost, endpoints }