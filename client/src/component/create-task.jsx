import React from 'react'
import './create-task.css'
const CraeteTASK = () => {
    let handleSubmit=(e)=>{
        e.preventDefault()
        let title=e.target[0].value
        let des=e.target[1].value
        let start=e.target[2].value
        let end=e.target[3].value
        
        e.target.reset();
       
    }

    return (
        <div className='container  dasboard-createTask'>
            <p>Create Your Task</p>
           <div className="row">
               <div className="w-50 mx-auto col-md-12">
                    <form onSubmit={(event)=>handleSubmit(event)}>
                        <div className="mb-3 dasboard-createTask__title ">
                            <label for="exampleInputEmail1" className="form-label">Task Title</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3 dasboard-createTask__des ">
                            <label for="exampleInputPassword1" className="form-label">Task Description</label>
                            <textarea type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 dasboard-createTask__date ">
                            <label for="exampleInputPassword1" className="form-label">Start Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="mb-3 dasboard-createTask__date ">
                            <label for="exampleInputPassword1" className="form-label">End Date</label>
                            <input type="date" className="form-control" />
                        </div>
                       
                        <button  type="submit" className="btn create-btn btn-outline-success">Create Task</button>
                </form>
               </div>
           </div>
        </div>
    )
}

export default CraeteTASK;
