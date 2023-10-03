import ApiClient from '../clients/ApiClient'

import Cookies from 'js-cookies'
import store from '../redux/store'
import { setUser, setError } from '../redux/reducers/SessionReducer'

export const submitLogin = ( form, loginData ) => {
  // form.setFields([
  //   {
  //     name: "email", // required
  //     errors: ["Invalid email"],
  //   },
  // ]);
  const saveSession = (response) => {
    
    const { headers, data } = response
    const tokenExpires = new Date(parseInt(headers.expires))
    
    const userData = {
      name: data.data.name,
      authorization: headers.authorization
    }
    
    Cookies.setItem('userData.name', userData.name, {
      expires: tokenExpires
    });

    Cookies.setItem('userData.authorization', userData.authorization, {
      expires: tokenExpires
    });

    store.dispatch(setUser(userData))
  }

  const params = { endpointPath: 'login', data: { user: {...loginData} } }
  ApiClient({...params})
  .then(saveSession)
  .catch(() => {
    store.dispatch(setError('Cannot login'))
  })
}



