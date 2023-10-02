const apiHost = import.meta.env.VITE_API_URL
const endpoints = {
  login: { url: '/login', method: 'POST' }
}
export { apiHost, endpoints }