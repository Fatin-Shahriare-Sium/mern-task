import React, {useState } from 'react'
import './showSingle.css'
import useChangeTitle from './useChangeTitle.jsx'
import star from '../assets/star.svg'
import starfill from '../assets/star-fill.svg'
import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import checkfill from '../assets/checkfill.svg'
import check from '../assets/check.svg'
import {Link} from 'react-router-dom'

const ShowSingle = ({title,des,start,end,complete,important,createdTime,id,handleComplete,handleDelete,handleStar}) => {
    let [truncate,setTruncate]=useState(des)
    useChangeTitle('Your Task')

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
                <p className='single-time__status'>Status:{complete?'Completed':'not completed'}</p>
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
            <Link to={`/dasboard/task/edit/${id}`}>
            <img className='edit-icon' src={edit} alt=""/>
            </Link>
            <img className='trash-icon' onClick={(event)=>handleDelete(event,id)} src={trash} alt=""/>
            <img className='star-icon' style={{height:'30px'}} onClick={(event)=>handleStar(event,id)} src={important?starfill:star} alt=""/>
            <img className='check-icon'style={{height:'30px'}} onClick={(event)=>handleComplete(event,id)} src={complete?checkfill:check} alt=""/>
            </div>
            </div>
            
        </div>
    )
}

export default ShowSingle;
