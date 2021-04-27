import React from 'react'
import com from '../assets/complete.svg'
const EmptyCompletedTask = () => {
    return (
        <div className='container dasboard-AllTaskEmpty'>
        <div className="row">
            <div className="col-md-6 text">
                <p>You have not completed Task,Yet</p>
            </div>
            <div  className="col-md-6 img-container">
            <img src={com} alt=""/>
            </div>
        </div>
       
    </div>
    )
}

export default EmptyCompletedTask;
