import { useEffect, useState } from "react"


let useEdit=(idx)=>{

    let[error,setError]=useState({})
    
    let cookie=localStorage.getItem('__toketasjy42562627')
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
                    haveCookie:cookie?true:false,
                    isAuthenticated:cookie
                })
            }).then(res=>res.json())
            .then(data=>{
                setError({
                    msg:data.msg,
                    success:data.success,
                    color:data.color
                })
                if(data.success){
                    e.target.reset()
                }
            })
        }
        
       
    }

    return {handleEdit,error}
}
export default useEdit;