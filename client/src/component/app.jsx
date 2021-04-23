import React from 'react'
import Dasboard from './dasboard'
import './app.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './signup'
import Home from './home'
import Login from './login'
import { AuthProvider } from './authContext'

let App=()=>{

    return(
       
            <BrowserRouter>
         <AuthProvider>
        <Switch>
            <Route exact path='/'>
            <Home/>
            </Route>
            <Route path='/dasboard'>
            <Dasboard/>
            </Route>
            <Route path='/signup'>
            <Signup/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
        </Switch>
        </AuthProvider>
        </BrowserRouter>
        
        
    )
}

export default App;