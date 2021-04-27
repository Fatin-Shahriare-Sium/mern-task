import React, { useState } from 'react'
import './dasboard.css'
import DasboardNav from './dasboard-nav.jsx'
import SidebarBtn from './sidebar-btn'
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom'
import {faCalendar, faCheck, faHome, faListAlt, faPlus, faTrash,faDoorOpen,faStar} from '@fortawesome/free-solid-svg-icons'
import DasboardAllTaskEmpty from './dasboard-AllTaskEmpty'
import CraeteTASK from './create-task'
import { useAuthencation } from './authContext'
import Showtask from './showTask'
import ViewTask from './viewTask'
import EditTask from './editTask'
import starx from '../assets/starx.svg'
const Dasboard = () => {
    let [cvalue,setCvalue]=useState('')
    let {auth}=useAuthencation()
    console.log(auth);
    let history=useHistory()
    if(!auth){
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
            <SidebarBtn handle={()=>setCvalue('Completed Task')} value='Completed Task' clickValue={cvalue} link='/dasboard/task/completed' Icon={faCheck}/>
            <SidebarBtn handle={()=>setCvalue('All Task')} value='All Task' clickValue={cvalue} link='/dasboard/task/all' Icon={faListAlt}/>
            <SidebarBtn handle={()=>setCvalue('Calender')} value='Calender' clickValue={cvalue} link='/dasboard/calender' Icon={faCalendar}/>
            <SidebarBtn handle={()=>setCvalue('Important Task')} value='Important Task' clickValue={cvalue} link='/dasboard/task/deleted' iconx={starx}/>

            <div style={{marginTop:'83%'}} className="logout">
            <SidebarBtn handle={()=>setCvalue('Deleted Task')} value='Log out' clickValue={cvalue} link='/task/deleted' Icon={faDoorOpen}/>
                
            </div>

            </div>

           <Switch>
           <div className="dasboard-main">
                <Route exact path='/dasboard/task/all'>
                {/* <DasboardAllTaskEmpty/> */}
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
                <Route exact path='/dasboard/task/completed'>
                  <Showtask/>
                </Route>
            </div>


           </Switch>
            </div>
        </div>
      
      
      
      
      </BrowserRouter>
    )
}

export default Dasboard;
