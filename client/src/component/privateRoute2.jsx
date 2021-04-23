import {Route,Redirect,useHistory} from 'react-router-dom'
import { useAuthencation } from './authContext'

let PrivateRoutex=({component:Component,...rest})=>{
    let auth =useAuthencation()
   
    return(
        <Route
        {...rest}
        render={props => {
          return auth?<Component {...props}/>:<Redirect to='/signup' />
        }}>
        </Route>
    )
}
export default PrivateRoutex;