import axios from 'axios'
import { apiHost, endpoints } from '../config/api'

const ApiClient = ({ endpointPath, data, query }) => {
  const parseEndpoint = () => {
    const endpoint = endpoints[endpointPath]
    if(query == undefined) return { ...endpoint, url: `${apiHost}${endpoint.url}` }
    
    const { url, method } = endpoint
    const parsedUrl = Object.entries(query).reduce((accumulator, currentValue) => {
      const regex = new RegExp(`:${currentValue[0]}` ,'g');
      
      return accumulator.replace(regex, currentValue[1])
    }, `${url}`)

    return { url: `${apiHost}${parsedUrl}`, method: method }
  }
  
  return axios({...parseEndpoint(), data: data})
}

export default ApiClient