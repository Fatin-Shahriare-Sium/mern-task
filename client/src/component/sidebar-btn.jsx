import React from 'react'
import {Link} from 'react-router-dom'
import './dasboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const SidebarBtn = ({value,link,clickValue,Icon,handle,iconx}) => {
    return (
        <div className={value===clickValue?'dasboard-sidebar__btn active':'dasboard-sidebar__btn'}>
            {Icon?<FontAwesomeIcon icon={Icon}/>:<img style={{height:'25px'}} src={iconx} alt=''/>}
            <button onClick={handle}  >  <Link to={link}>{value}</Link></button>
            
            
        </div>
    )
}

export default SidebarBtn;
