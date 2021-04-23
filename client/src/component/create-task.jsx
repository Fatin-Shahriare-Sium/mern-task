import React from 'react'
import './create-task.css'
import Small from './small'
import useCreateTask from './useCreateTask'
const CraeteTASK = () => {
    let {handleSubmit,error}= useCreateTask()

    return (
        <div className='container  dasboard-createTask'>
            <p>Create Your Task</p>
           <div className="row">
               <div className="w-50 mx-auto col-md-12">
                    <form onSubmit={(event)=>handleSubmit(event)}>
                        <div className="mb-3 dasboard-createTask__title ">
                            <label for="exampleInputEmail1" className="form-label">Task Title</label>
                            <input type="text" className={error.title?'form-control is-invalid':'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <Small text={error.title}/>
                        </div>
                        <div className="mb-3 dasboard-createTask__des ">
                            <label for="exampleInputPassword1" className="form-label">Task Description</label>
                            <textarea type="text" className={error.des?'form-control is-invalid':'form-control'}  id="exampleInputPassword1"/>
                            <Small text={error.des}/>
                        </div>
                        <div className="mb-3 dasboard-createTask__date ">
                            <label for="exampleInputPassword1" className="form-label">Start Date</label>
                            <input type="date" className={error.start?'form-control is-invalid':'form-control'}  />
                            <Small text={error.start}/>
                        </div>
                        <div className="mb-3 dasboard-createTask__date ">
                            <label for="exampleInputPassword1" className="form-label">End Date</label>
                            <input type="date"  className={error.end?'form-control is-invalid':'form-control'} />
                            <Small text={error.end}/>
                        </div>
                       
                        <button  type="submit" className="btn create-btn btn-outline-success">Create Task</button>
                </form>
               </div>
           </div>
        </div>
    )
}

export default CraeteTASK;
