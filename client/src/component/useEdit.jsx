import { useEffect, useState } from "react"
import { useHistory } from "react-router"


let useEdit=(idx,taskx)=>{
    console.log('iuseedirt',taskx);
    let history=useHistory()
    let[error,setError]=useState({})
    let handleEdit=(e)=>{
        e.preventDefault()
        let title=e.target[0].value
        let des=e.target[1].value
        let start=e.target[2].value
        let end=e.target[3].value
        setError({
            title:title?'':'Give the title',
            des:des?'':'Give the description',
            start:start?'':'Give the Start Date',
            end:end?'':'Give the End Date',
        })
        if(title && des && start && end){
            e.target.reset();
            fetch(`/task/update/${idx}`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title,
                    des,
                    start,
                    end,
                    complete:taskx.complete,
                    important:taskx.important
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log('usedit',data);
                setError({
                    msg:data.msg,
                    success:data.success,
                    color:data.color
                })
                if(data.success){
                    e.target.reset()
                    setTimeout(()=>{
                        history.push('/dasboard/task/all')
                    },500)
                }
            })
        }
        
       
    }

    return {handleEdit,error}
}
export default useEdit;