import React, {useState } from 'react'
import ShowSingle from './showSingle'
import ReactDOM from 'react-dom'
import './showTask.css'
import moment from 'moment'
import { useLocation } from 'react-router'
import useTool from './useTool'
import DasboardAllTaskEmpty from './dasboard-AllTaskEmpty'
import EmptyCompletedTask from './emptyCompletedTask'
import EmptyImportantTask from './emptyImportantTask'
import Loading from './loading'
//https://medium.com/how-to-react/create-a-calendar-in-react-js-e48e43ab3a19
const Showtask = () => {
   console.log('showtask');
    let location=useLocation()
    let {handleComplete,handleDelete,handleStar,state}= useTool(location)
    console.log(state);
    let AlertPortal=()=>{
        
    
            
        if(state.error){
            setTimeout(()=>{
                let alertx=document.getElementById('alertx')
                alertx.style.display='none'
            },700)
            return ReactDOM.createPortal(
                <div id='alertx' className={`alertx ${state.error.color}`}>
                   <p> {state.error.msg}</p>
                  
                </div>
                ,document.getElementById('alert'))
        }
           

  
    } 

    function createdTime(time){
        return  moment(time).fromNow();
    }
    function renderConditionally(){
        if(!state.loading && state.task.length==0 && location.pathname==='/dasboard/task/completed'){
           return <EmptyCompletedTask/>
        }else if(!state.loading && state.task.length==0 && location.pathname==='/dasboard/task/all'){
            return <DasboardAllTaskEmpty/>
           
        }else if(!state.loading && state.task.length==0 && location.pathname==='/dasboard/task/important'){
            return <EmptyImportantTask/>
        }else if(!state.loading){
            return state.task.map((sig,index)=> <ShowSingle key={index} title={sig.title} id={sig._id} handleComplete={handleComplete} handleStar={handleStar} handleDelete={handleDelete} createdTime={createdTime(sig.createdAt)} des={sig.des} start={sig.startD} end={sig.endD} important={sig.important} complete={sig.complete}/>)
        }
    }
    return (
        <div className='showtask'>
            {AlertPortal()}
            {state.loading?<Loading/> :renderConditionally()}
            
           
        </div>
    )
}
//
export default Showtask;
