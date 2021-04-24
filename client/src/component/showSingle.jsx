import React from 'react'
import './showSingle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faFaucet,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import check from '../assets/check.svg'
const ShowSingle = () => {
    return (
        <div className='single shadow'>
            <div className="single-details-mainwrapper">
            <div className='single-details-wrapper'>
            <div className="single-details">
                <p className='single-details__title'>Allah is Almighty</p>
                <p className='single-details__des'>I am now creating task showing section</p>
            </div>
            <div className="single-time">
                <p className='single-time__time'>Time:2/4/20-3/5/21</p>
                <p className='single-time__posted'>Posted 1 days ago</p>
                <p className='single-time__status'>Status:Not completed</p>
            </div>
            </div>
            </div>
            <div className="single-tool">
            <div className='single-tool__wrapper'>
            <FontAwesomeIcon icon={faEdit}/>
            <FontAwesomeIcon icon={faTrashAlt}/>
            <FontAwesomeIcon icon={faFaucet}/>
            <img src={check} alt=""/>
            </div>
            </div>
            
        </div>
    )
}

export default ShowSingle;
