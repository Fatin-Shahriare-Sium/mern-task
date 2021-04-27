import {useEffect, useReducer } from "react"
let useTool=(location)=>{
    console.log('useTool');
    let cookie=localStorage.getItem('__toketasjy42562627')
    let Action={
        TASK_ENTER:'task-enter',
        ERROR_ENTER:'error',
        SET_LOADING:'loading'
    }
    
    let reducer=(state,action)=>{
        if(action.type===Action.TASK_ENTER){
            console.log('task enter reducer');
            return {
                ...state,
                task:action.payload
            }
        }else if(action.type===Action.ERROR_ENTER){
            return{
                ...state,
                error:action.payload
            }
        }else if(action.type===Action.SET_LOADING){
            return{
                ...state,
                loading:action.payload
            }
        }
        return state;
    }
    let [state,dispatch]=useReducer(reducer,{
        task:{},
        error:{},
        loading:true
    })

   
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
            console.log(data);
            if(location.pathname==='/dasboard/task/completed'){
                let completedTask=data.all.filter(sig=>sig.complete===true)
              
                dispatch({type:Action.TASK_ENTER,payload:completedTask})
            }else{
                dispatch({type:Action.TASK_ENTER,payload:data.all})
            }
            dispatch({type:Action.SET_LOADING,payload:false})
           
        })
    },[state.loading])
  
    function handleComplete(e,idx) {
        console.log('hamdleComplete',idx)
        let forTask=state.task.find(sig=>sig._id==idx)

        fetch(`/task/complete/${idx}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                complete:forTask.complete?false:true
                
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch({type:Action.SET_LOADING,payload:true})
            // dispatch({type:Action.TASK_ENTER,payload:data.newTask})
            let errorx={
                msg:data.msg,
                color:data.color
            }
            dispatch({type:Action.ERROR_ENTER,payload:errorx})
           

        })
    }
    function handleDelete(e,idx){
       
       
        fetch(`/task/delete/${idx}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
            // dispatch({type:Action.SET_LOADING,payload:true})
            let errorx={
                msg:data.msg,
                color:data.color
            }
            dispatch({type:Action.ERROR_ENTER,payload:errorx})
        
        })
    }
    function handleStar(e,idx){
        fetch(`/task/important/${idx}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                important:state.task.important?false:true
            })
        }).then(res=>res.json())
        .then(data=>{
            // // dispatch({type:Action.SET_LOADING,payload:true})
            // dispatch({type:Action.TASK_ENTER,payload:data.newTask})
            let errorx={
                msg:data.msg,
                color:data.color
            }
            dispatch({type:Action.ERROR_ENTER,payload:errorx})
           
            console.log(data);
            
            if(data.success){

            }
        })
    }

    let errorHandeler=()=>{
        dispatch({type:Action.ERROR_ENTER,payload:{}})
    }
    return {handleComplete,handleDelete,handleStar,state,errorHandeler}
}

export default useTool;