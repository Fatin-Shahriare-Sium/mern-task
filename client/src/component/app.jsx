import React from 'react'
import Dasboard from './dasboard'
import './app.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './signup'
import Home from './home'
import Login from './login'
import { AuthProvider } from './authContext'
import PrivateRoutex from './privateRoute2'
import PrivateRoute from './privateRoute'
import Profile from './profile'

let App=()=>{

    return(
       
            <BrowserRouter>
         <AuthProvider>
        <Switch>
        
            <Route exact path='/'>
            <Home/>
            </Route>
            <Route exact path='/signup'>
            <Signup/>
            </Route>

            <Route exact path='/dasboard'>
                <Dasboard/>
                </Route>
            {/* <Route path='/login' component={Login} /> */}
          <PrivateRoute  component={Login}/>
           
            </Switch>
            
         
        
        </AuthProvider>
        </BrowserRouter>
        
        
    )
}

export default App;