import React, { useState } from 'react'
import './dasboard.css'
import DasboardNav from './dasboard-nav.jsx'
import SidebarBtn from './sidebar-btn'
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom'
import {faCheck, faHome, faListAlt, faPlus,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import CraeteTASK from './create-task'
import Showtask from './showTask'
import ViewTask from './viewTask'
import EditTask from './editTask'
import starx from '../assets/starx.svg'
import Analytics from './analytics'
import analytics from '../assets/analytics.svg'
import DasboardHome from './dasboardHome'
import Profile from './profile'
import useLogout from './useLogout'
const Dasboard = () => {
  let cookie=localStorage.getItem('__toketasjy42562627')
    let [cvalue,setCvalue]=useState('')
   let {handleLogout}=useLogout()
    let history=useHistory()
    if(!cookie){
      console.log('!auth');
      history.push('/login')
    }
    return (
      <BrowserRouter >
        <div className='dasboard'>
          
            <DasboardNav/>
            
            <div className="dasboard-container">
            <div   className='dasboard-siderbar'>
            <SidebarBtn handle={()=>setCvalue('Dasboard')} value='Dasboard' clickValue={cvalue} link='/dasboard' Icon={faHome} />
            <SidebarBtn handle={()=>setCvalue('Create Task')} value='Create Task' clickValue={cvalue} link='/dasboard/task/create' Icon={faPlus} />
            <SidebarBtn handle={()=>setCvalue('All Task')} value='All Task' clickValue={cvalue} link='/dasboard/task/all' Icon={faListAlt}/>
            <SidebarBtn handle={()=>setCvalue('Completed Task')} value='Completed Task' clickValue={cvalue} link='/dasboard/task/completed' Icon={faCheck}/>
            <SidebarBtn handle={()=>setCvalue('Important Task')} value='Important Task' clickValue={cvalue} link='/dasboard/task/important' iconx={starx}/>
            <SidebarBtn handle={()=>setCvalue('Analytics')} value='Analytics' clickValue={cvalue} link='/dasboard/analytics' iconx={analytics}/>

            <div style={{marginTop:'83%'}} className="logout">
            <SidebarBtn handle={()=>handleLogout()} value='Log out' clickValue={cvalue} link='/task/deleted' Icon={faDoorOpen}/>
                
            </div>

            </div>

           <Switch>
           <div className="dasboard-main">
                <Route exact path='/dasboard'>
                  <DasboardHome/>
                </Route>
                <Route exact path='/dasboard/task/all'>
               
                <Showtask/>
                </Route>
                <Route exact path='/dasboard/task/create'>
                    <CraeteTASK/>
                </Route>
                <Route exact path='/dasboard/task/view/:id'>
                  <ViewTask/>
                </Route>
                <Route exact path='/dasboard/task/edit/:id'>
                  <EditTask/>
                </Route>
                <Route exact  path='/dasboard/task/completed'>
                  <Showtask/>
                </Route>
                <Route path='/dasboard/task/important'>
                <Showtask/>
                </Route>
               <Route path='/dasboard/analytics'>
                 <Analytics/>
               </Route>
               <Route path='/dasboard/profile'>
                 <Profile/>
               </Route>
            </div>


           </Switch>
            </div>
        </div>
      
      
      
      
      </BrowserRouter>
    )
}

export default Dasboard;
