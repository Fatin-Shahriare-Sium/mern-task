import { useState } from "react"

let useCreateTask=()=>{
    let[error,setError]=useState({})
    let handleSubmit=(e)=>{
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
            fetch('/task/create',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title,
                    des,
                    start,
                    end
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
        
       
    }
    return {handleSubmit,error}
}
export default useCreateTask;