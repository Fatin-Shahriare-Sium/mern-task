import {Route,Redirect} from 'react-router-dom'
import { useAuthencation } from './authContext'

let PrivateRoute=({component:Component,...rest})=>{
    let {auth} =useAuthencation()
    return(
        <Route
        {...rest}
        render={props => {
          return auth? <Redirect to='/dasboard' />:<Component {...props} />
        }}>
        </Route>
    )
}
export default PrivateRoute;