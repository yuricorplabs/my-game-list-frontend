import ApiClient from '../clients/ApiClient'

import Cookies from 'js-cookie'
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
    const tokenExpires = new Date(Date.parse(headers.expires))
    
    const userData = {
      ...data.data,
      authorization: headers.authorization
    }
    
    Cookies.set('userData', JSON.stringify(userData), {
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

export const logout = () => {
  const destroySession = () => {
    
    Cookies.remove('userData')
    store.dispatch(setUser(null))
  }

  ApiClient({ endpointPath: 'logout' })
  .then(destroySession)
  .catch(() => {
    store.dispatch(setError('Cannot logout'))
  })
}



