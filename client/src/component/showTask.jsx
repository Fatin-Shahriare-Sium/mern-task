import React, { useEffect, useState } from 'react'
import ShowSingle from './showSingle'
import './showTask.css'
import moment from 'moment'
import { useLocation } from 'react-router'
//https://medium.com/how-to-react/create-a-calendar-in-react-js-e48e43ab3a19
const Showtask = () => {
    console.log('showsingle conatiner call');
    let location=useLocation()
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
            if(location.pathname==='/dasboard/task/completed'){
                let completedTask=data.all.filter(sig=>sig.complete===true)
                SetTask(completedTask)
            }else{
                SetTask(data.all)
            }
            
            setLoading(false)
        })
    },[loading])
    function autoRefresherx(){
        setLoading(true)
        console.log('auto refeser call');
    }
    function createdTime(time){
        return  moment(time).fromNow();
    }
    return (
        <div className='showtask'>
            {
               !loading && task.map((sig,index)=> <ShowSingle key={index} title={sig.title} id={sig._id} loadingTigger={autoRefresherx}  createdTime={createdTime(sig.createdAt)} des={sig.des} start={sig.startD} end={sig.endD} status={sig.complete}/>)
            }
           
        </div>
    )
}

export default Showtask;
