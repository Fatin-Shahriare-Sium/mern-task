import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import './viewTask.css'
const ViewTask = () => {
    let {id}=useParams()
    console.log(id);
    let[sigTask,setsigTask]=useState({})
    let[loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://merntaskma.herokuapp.com/task/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            setsigTask(data.task)
            setLoading(false)
        })
    },[])
    return (
        <div className='viewtask'>
           <div className='viewtask-mainwrapper'>
           <div className="viewtask-title">
                <h1 style={{fontWeight:'700',textDecoration:'underline'}}>Title</h1>
                <p>{sigTask.title}</p>
            </div>
            <div className="viewtask-des">
                <h1 style={{fontWeight:'700',textDecoration:'underline'}}>Description</h1>
                <p>{sigTask.des}</p>
            </div>
            <div className="viewtask-time">
                <h1 style={{fontWeight:'700',textDecoration:'underline'}}>Time</h1>
                <p>{sigTask.startD}/{sigTask.endD}</p>
            </div>
            <div className="viewtask-status">
                 <h1 style={{fontWeight:'700',textDecoration:'underline'}}>Status</h1>
                <p>{sigTask.status?'Completed':'Not completed'}</p>
                </div>
           </div>
           <div className="viewtask-btnwrapper">
               <Link to={`/dasboard/task/edit/${id}`}>
               <button className='btn-edit'>Edit</button>
               </Link>
               <Link to='/dasboard/task/all'>
               <button className='btn-back'>Back</button>
               </Link>
           </div>
        </div>
    )
}

export default ViewTask;
