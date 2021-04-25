import React, { useEffect, useState } from 'react'
import ShowSingle from './showSingle'
import './showTask.css'
import moment from 'moment'
const Showtask = () => {
    let[task,SetTask]=useState('')
    let[loading,setLoading]=useState(true)
    let cookie=localStorage.getItem('__toketasjy42562627')
    useEffect(()=>{
        fetch('/task',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                haveCookie:cookie?true:false,
                isAuthenticated:cookie
            })
        }).then(res=>res.json())
        .then(data=>{
            SetTask(data.all)
            setLoading(false)
        })
    },[])
    function createdTime(time){
        return  moment(time).fromNow();
    }
    return (
        <div className='showtask'>
            {
               !loading && task.map((sig,index)=> <ShowSingle key={index} title={sig.title} id={sig._id} createdTime={createdTime(sig.createdAt)} des={sig.des} start={sig.startD} end={sig.endD} status={sig.completed}/>)
            }
           
        </div>
    )
}

export default Showtask;
