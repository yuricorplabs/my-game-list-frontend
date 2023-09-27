const apiConfig = () => {
  const apiHost = () => {
    if(import.meta.env.DEV) return 'http://localhost:3001'
    
    return import.meta.env.VITE_API_URL
  }
  return {
    apiHost: import.meta.env.VITE_API_URL,
    endpoints: {
      login: {url: '/login', method: 'POST'}
    }
  }
}

export default apiConfig()