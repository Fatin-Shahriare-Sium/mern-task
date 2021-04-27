import React, { useEffect, useState } from 'react'
import './showSingle.css'
import useChangeTitle from './useChangeTitle.jsx'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faFaucet,faStar,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import starfill from '../assets/star-fill.svg'
import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import checkfill from '../assets/checkfill.svg'
import {Link} from 'react-router-dom'
import useTool from './useTool'
import Alert from './alert'
const ShowSingle = ({title,des,start,end,status,createdTime,id,loadingTigger}) => {
    let [truncate,setTruncate]=useState(des)
    useChangeTitle('Your Task')
   

    let {handleComplete,handleDelete,handleStar,error,task,setError}= useTool(id,loadingTigger)
   
    let AlertPortal=()=>{
        if(error.msg){
            setTimeout(()=>{
                setError({})
            },700)
            return ReactDOM.createPortal(
                <div className={`alertx ${error.color}`}>
                   <p> {error.msg}</p>
                  
                </div>
                ,document.getElementById('alert'))
                
        }
  
    }
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
         {AlertPortal()}
            <div className="single-details-mainwrapper">
            <div className='single-details-wrapper'>
            <div className="single-details">
                <p className='single-details__title'>{title}</p>
                <p className='single-details__des'>{truncate}</p>
            </div>
            
            <div className="single-time">
                <p className='single-time__time'>{`Time:${start}-${end}`}</p>
                <p className='single-time__posted'>{`Created, ${createdTime}`}</p>
                <p className='single-time__status'>Status:{task.complete?'Completed':'not completed'}</p>
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
            <img className='trash-icon' onClick={(event)=>handleDelete(event)} src={trash} alt=""/>
            <img className='star-icon' style={{height:'30px'}} onClick={(event)=>handleStar(event)} src={task.important?starfill:star} alt=""/>
            <img className='check-icon'style={{height:'30px'}} onClick={(event)=>handleComplete(event)} src={task.complete?checkfill:check} alt=""/>
            </div>
            </div>
            
        </div>
    )
}

export default ShowSingle;
