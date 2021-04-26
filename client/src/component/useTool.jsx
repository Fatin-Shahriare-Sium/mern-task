import { useState,useEffect } from "react"
import { useHistory } from "react-router";

let useTool=(idx,loadingTigger)=>{
    console.log('useTool',);
    let[task,setTask]=useState({})
    let[error,setError]=useState({})
    let history=useHistory()
    
    useEffect(()=>{
        fetch(`/task/${idx}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
            setTask(data.task)
        })
    },[idx])
    function handleComplete(e) {
        
        fetch(`/task/complete/${idx}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                complete:task.complete?false:true
                
            })
        }).then(res=>res.json())
        .then(data=>{
            setTask(data.newTask)
            setError({
                msg:data.msg,
                color:data.color
            })
            // loadingTigger()
            if(data.success){
            }
        })
    }
    function handleDelete(e){
       
       
        fetch(`/task/delete/${idx}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    function handleStar(e){
        fetch(`/task/important/${idx}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                important:task.important?false:true
            })
        })
    }
    return {handleComplete,handleDelete,handleStar,error,task}
}

export default useTool;