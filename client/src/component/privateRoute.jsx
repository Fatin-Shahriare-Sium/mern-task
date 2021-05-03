import {Route,Redirect} from 'react-router-dom'
import { useAuthencation } from './authContext'

let PrivateRoute=({component:Component,...rest})=>{
    let cookie=localStorage.getItem('__toketasjy42562627')
    return(
        <Route
        {...rest}
        render={props => {
          return cookie? <Redirect to='/dasboard' />:<Component {...props} />
        }}>
        </Route>
    )
}
export default PrivateRoute;