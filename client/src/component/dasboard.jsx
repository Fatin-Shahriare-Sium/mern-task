import React, { useState } from 'react'
import './dasboard.css'
import DasboardNav from './dasboard-nav.jsx'
import SidebarBtn from './sidebar-btn'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {faCalendar, faCheck, faHome, faListAlt, faPlus, faTrash,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import DasboardAllTaskEmpty from './dasboard-AllTaskEmpty'
import CraeteTASK from './create-task'
const Dasboard = () => {
    let [cvalue,setCvalue]=useState('')
    return (
      <BrowserRouter >
        <div className='dasboard'>
            <DasboardNav/>
            
            <div className="dasboard-container">
            <div   className='dasboard-siderbar'>
            <SidebarBtn handle={()=>setCvalue('Dasboard')} value='Dasboard' clickValue={cvalue} link='/dasboard' Icon={faHome} />
            <SidebarBtn handle={()=>setCvalue('Create Task')} value='Create Task' clickValue={cvalue} link='/dasboard/task/create' Icon={faPlus} />
            <SidebarBtn handle={()=>setCvalue('Completed Task')} value='Completed Task' clickValue={cvalue} link='/dasboard/task/completed-task' Icon={faCheck}/>
            <SidebarBtn handle={()=>setCvalue('All Task')} value='All Task' clickValue={cvalue} link='/dasboard/task/all' Icon={faListAlt}/>
            <SidebarBtn handle={()=>setCvalue('Calender')} value='Calender' clickValue={cvalue} link='/dasboard/calender' Icon={faCalendar}/>
            <SidebarBtn handle={()=>setCvalue('Deleted Task')} value='Deleted Task' clickValue={cvalue} link='/dasboard/task/deleted' Icon={faTrash}/>

            <div style={{marginTop:'83%'}} className="logout">
            <SidebarBtn handle={()=>setCvalue('Deleted Task')} value='Log out' clickValue={cvalue} link='/task/deleted' Icon={faDoorOpen}/>
                
            </div>

            </div>

           <Switch>
           <div className="dasboard-main">
                <Route path='/dasboard/task/all'>
                <DasboardAllTaskEmpty/>
                </Route>
                <Route path='/dasboard/task/create'>
                    <CraeteTASK/>
                </Route>
            </div>


           </Switch>
            </div>
        </div>
      
      
      
      
      </BrowserRouter>
    )
}

export default Dasboard;
