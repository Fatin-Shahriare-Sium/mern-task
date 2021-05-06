import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Alert from './alert'
import Small from './small'
import useChangeTitle from './useChangeTitle'
import useEdit from './useEdit.jsx'

const EditTask = () => {
    let {id}=useParams()
    let[task,setTask]=useState({})
    
    useEffect(()=>{
        let title=document.getElementById('title')
        let des=document.getElementById('des')
        let start=document.getElementById('start')
        let end=document.getElementById('end')
        fetch(`https://merntaskma.herokuapp.com/task/${id}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            },
        }).then(res=>res.json())
        .then(data=>{
            let taskx=data.task
            
             title.value=taskx.title
            des.innerText=taskx.des
            start.value=taskx.startD
            end.value=taskx.endD
            setTask(taskx)
        })
    
  
    },[id])
    
    useChangeTitle('Edit Task')
    let {handleEdit,error}= useEdit(id,task)
   
   function showAlert(){
    if(error.msg){
        return <Alert text={error.msg} color={error.color}/>
    }
    
}
    return (
        
        <>
       <div className='container  dasboard-createTask'>
        <p>Create Your Task</p>
        {showAlert()}
       <div className="row">
           <div className="w-50 mx-auto col-md-12">
                <form onSubmit={(event)=>handleEdit(event)}>
                    <div className="mb-3 dasboard-createTask__title ">
                        <label for="exampleInputEmail1" className="form-label">Task Title</label>
                        <input  type="text"  className={error.title?'form-control is-invalid':'form-control'} id="title"/>
                        <Small text={error.title}/>
                        
                    </div>
                    <div className="mb-3 dasboard-createTask__des ">
                        <label for="exampleInputPassword1" className="form-label">Task Description</label>
                        <textarea type="text" className={error.des?'form-control is-invalid':'form-control'}  id="des"/>
                        <Small text={error.des}/>
                    </div>
                    <div className="mb-3 dasboard-createTask__date ">
                        <label for="exampleInputPassword1" className="form-label">Start Date</label>
                        <input type="date" id='start' className={error.start?'form-control is-invalid':'form-control'}  />
                        <Small text={error.start}/>
                    </div>
                    <div className="mb-3 dasboard-createTask__date ">
                        <label for="exampleInputPassword1" className="form-label">End Date</label>
                        <input type="date" id='end'  className={error.end?'form-control is-invalid':'form-control'} />
                        <Small text={error.end}/>
                    </div>
                   
                    <button  type="submit" className="btn create-btn btn-outline-success">Update Task</button>
            </form>
           </div>
       </div>
    </div>
    </>
    )
}

export default EditTask;
