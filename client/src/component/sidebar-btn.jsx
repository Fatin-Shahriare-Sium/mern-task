import React from 'react'
import {Link} from 'react-router-dom'
import './dasboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const SidebarBtn = ({value,link,clickValue,Icon,handle,iconx}) => {
    return (
    <Link to={link}>
        <div onClick={handle}  className={value===clickValue?'dasboard-sidebar__btn active':'dasboard-sidebar__btn'}>
            {Icon?<FontAwesomeIcon icon={Icon}/>:<img style={{height:'25px'}} src={iconx} alt=''/>}
            <button>{value}</button>
            
            
        </div>
        </Link>
    )
}

export default SidebarBtn;
