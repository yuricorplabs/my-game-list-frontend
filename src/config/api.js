const apiConfig = () => {
  const apiHost = () => {
    if(__APP_ENV__ == 'development') return 'http://localhost:3001'
    
    return ''
  }

  return {
    apiHost: apiHost(),
    endpoints: {
      login: {url: '/login', method: 'post'}
    }
  }
}

export default apiConfig()