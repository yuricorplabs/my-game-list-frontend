const apiConfig = () => {
  return {
    apiHost: import.meta.env.VITE_API_URL,
    endpoints: {
      login: {url: '/login', method: 'POST'}
    }
  }
}
const config = apiConfig()
const apiHost = config.apiHost
const endpoints = config.endpoints
export {apiHost, endpoints}