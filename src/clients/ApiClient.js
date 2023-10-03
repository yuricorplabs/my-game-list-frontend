import axios from 'axios'
import { apiHost, endpoints } from '../config/api'
import store from '../redux/store'

const ApiClient = ({ endpointPath, data, queryUrl, query }) => {
  const parseEndpoint = () => {
    const endpoint = endpoints[endpointPath]
    if(queryUrl == undefined) return { ...endpoint, url: `${apiHost}${endpoint.url}` }
    
    const { url, method } = endpoint
    const parsedUrl = Object.entries(queryUrl).reduce((accumulator, currentValue) => {
      const regex = new RegExp(`:${currentValue[0]}` ,'g');
      
      return accumulator.replace(regex, currentValue[1])
    }, `${url}`)

    return { url: `${apiHost}${parsedUrl}`, method: method }
  }

  const authenticationHeader = () => {
    function selectCurrentUser(state) {
      return state.session.currentUser
    }
    
    const currentUser = selectCurrentUser(store.getState())
    if(currentUser === undefined) return {}

    return { authentication: currentUser.authentication }
  }
  
  return axios({...parseEndpoint(), data: data, query: query, headers: authenticationHeader()})
}

export default ApiClient