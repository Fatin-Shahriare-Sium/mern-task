import React from 'react'
import important from '../assets/important.svg'
const EmptyImportantTask = () => {
    return (
        <div className='container dasboard-AllTaskEmpty'>
        <div className="row">
            <div className="col-md-6 text">
                <p>You have not included any task as important,Yet</p>
            </div>
            <div  className="col-md-6 img-container">
            <img src={important} alt=""/>
            </div>
        </div>
       
    </div>
    )
}

export default EmptyImportantTask;
