// Write your JS code here
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
  //   7 spread operator is not used
}

export default ProtectedRoute
