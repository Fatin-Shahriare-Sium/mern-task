import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import SidebarBtn from './sidebar-btn'
import './offcanvas.css'
import starx from '../assets/starx.svg'
import analytics from '../assets/analytics.svg'
import {faCheck, faHome, faListAlt, faPlus,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
const Offcanvas = () => {
    let[offcanvas,setOffcanvas]=useState(false)
    let [cvalue,setCvalue]=useState('')
    function toggleCanvas(){
        setOffcanvas(pre=>!pre)
    }

    return (
        <>
    
<div onClick={()=>toggleCanvas()} className='burger'>
                <img src={menu} alt=""/>
            </div>
            <div className={offcanvas?'offcanvas-wrapper':''}>
        <div class={offcanvas?'offcanvas offcanvas-start show':'offcanvas offcanvas-start'} tabindex="-1" style={{visibility:'visible'}} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Task Manager</h5>
    <button onClick={()=>toggleCanvas()} type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className='dasboard-siderbar' style={{display:'flex'}} onClick={()=>toggleCanvas()} >
            <SidebarBtn  handle={()=>setCvalue('Dasboard')} value='Dasboard' clickValue={cvalue} link='/dasboard' Icon={faHome} />
            <SidebarBtn handle={()=>setCvalue('Create Task')} value='Create Task' clickValue={cvalue} link='/dasboard/task/create' Icon={faPlus} />
            <SidebarBtn handle={()=>setCvalue('All Task')} value='All Task' clickValue={cvalue} link='/dasboard/task/all' Icon={faListAlt}/>
            <SidebarBtn handle={()=>setCvalue('Completed Task')} value='Completed Task' clickValue={cvalue} link='/dasboard/task/completed' Icon={faCheck}/>
            <SidebarBtn handle={()=>setCvalue('Important Task')} value='Important Task' clickValue={cvalue} link='/dasboard/task/important' iconx={starx}/>
            <SidebarBtn handle={()=>setCvalue('Analytics')} value='Analytics' clickValue={cvalue} link='/dasboard/analytics' iconx={analytics}/>

            <div style={{marginTop:'83%'}} className="logout">
            <SidebarBtn handle={()=>setCvalue('Deleted Task')} value='Log out' clickValue={cvalue} link='/task/deleted' Icon={faDoorOpen}/>
                
            </div>

            </div>
  </div>
 
</div>
<div className={offcanvas?'offcanvas-shadow':''}>
           
        </div>
</div>

        </>
    )
}

export default Offcanvas;
