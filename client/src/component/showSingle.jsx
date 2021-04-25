import React, { useEffect, useState } from 'react'
import './showSingle.css'
import useChangeTitle from './useChangeTitle.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faFaucet,faStar,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import starfill from '../assets/star-fill.svg'
import {Link} from 'react-router-dom'
const ShowSingle = ({title,des,start,end,status,createdTime,id}) => {
    let [truncate,setTruncate]=useState(des)
    useChangeTitle('Your Task')
    // useEffect(()=>{
      
    // },[truncate,setTruncate])
    window.addEventListener('resize',(e)=>{
        let width=e.target.innerWidth
    

            if(des.length<50 && width>1500 ){
                setTruncate(des)
            }else if(des.length>50 && width>1500){
                setTruncate(des.substring(0,50)+'...')
            }
            else if(width<800){
                
                setTruncate(des.substring(0,33)+'...')
               
            }
        
    })
    return (
        <div className='single shadow'>
            <div className="single-details-mainwrapper">
            <div className='single-details-wrapper'>
            <div className="single-details">
                <p className='single-details__title'>{title}</p>
                <p className='single-details__des'>{truncate}</p>
            </div>
            <div className="single-time">
                <p className='single-time__time'>{`Time:${start}-${end}`}</p>
                <p className='single-time__posted'>{`Created, ${createdTime}`}</p>
                <p className='single-time__status'>Status:{status?'Completed':'not completed'}</p>
            </div>
            </div>
            <div className='single-details-mainwrapper__overlay'>
                <Link to={`/dasboard/task/view/${id}`}>
                <button className='btn btn-outline-success'>See Details</button>
                </Link>
            </div>
            </div>
            <div className="single-tool">
            <div className='single-tool__wrapper'>
            <FontAwesomeIcon icon={faEdit}/>
            <FontAwesomeIcon className='trash-icon' icon={faTrashAlt}/>
            <img className='star-icon' src={star} alt=""/>
            <img src={check} alt=""/>
            </div>
            </div>
            
        </div>
    )
}

export default ShowSingle;
