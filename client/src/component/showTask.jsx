import React, { useEffect, useState } from 'react'
import ShowSingle from './showSingle'
import ReactDOM from 'react-dom'
import './showTask.css'
import moment from 'moment'
import { useLocation } from 'react-router'
import useTool from './useTool'
//https://medium.com/how-to-react/create-a-calendar-in-react-js-e48e43ab3a19
const Showtask = () => {
    console.log('showsingle conatiner call');
    let location=useLocation()
    let {handleComplete,handleDelete,handleStar,state,errorHandeler}= useTool(location)
    
    let AlertPortal=()=>{
        if(state.error.msg){
            setTimeout(()=>{
               errorHandeler()
            },700)
            return ReactDOM.createPortal(
                <div className={`alertx ${state.error.color}`}>
                   <p> {state.error.msg}</p>
                  
                </div>
                ,document.getElementById('alert'))
                
        }
  
    } 

    function createdTime(time){
        return  moment(time).fromNow();
    }
    return (
        <div className='showtask'>
            {AlertPortal()}
            {
               !state.loading && state.task.map((sig,index)=> <ShowSingle key={index} title={sig.title} id={sig._id} handleComplete={handleComplete} handleStar={handleStar} handleDelete={handleDelete} createdTime={createdTime(sig.createdAt)} des={sig.des} start={sig.startD} end={sig.endD} important={sig.important} complete={sig.complete}/>)
            }
            
           
        </div>
    )
}

export default Showtask;
