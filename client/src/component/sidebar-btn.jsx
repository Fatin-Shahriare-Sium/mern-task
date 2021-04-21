import React from 'react'
import {Link} from 'react-router-dom'
import './dasboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const SidebarBtn = ({value,link,clickValue,Icon,handle}) => {
    return (
        <div className={value===clickValue?'dasboard-sidebar__btn active':'dasboard-sidebar__btn'}>
            <FontAwesomeIcon icon={Icon}/>
            <button onClick={handle}  >  <Link to={link}>{value}</Link></button>
            {console.log(clickValue)}
            
        </div>
    )
}

export default SidebarBtn;
