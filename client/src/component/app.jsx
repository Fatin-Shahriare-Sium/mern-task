import React from 'react'
import Dasboard from './dasboard'
import './app.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from './signup'
import Home from './home'

let App=()=>{

    return(
        
        <BrowserRouter>
        
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
        </Switch>
          
        </BrowserRouter>
    )
}

export default App;