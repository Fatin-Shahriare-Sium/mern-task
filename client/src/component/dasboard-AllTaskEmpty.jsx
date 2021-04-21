import React from 'react'
import note from '../assets/note.svg'
import './dasboard-AllTaskEmpty.css'
const DasboardAllTaskEmpty = () => {
    return (
        <div className='container dasboard-AllTaskEmpty'>
            <div className="row">
                <div className="col-md-6 text">
                    <p>You have not created Task,Yet</p>
                </div>
                <div  className="col-md-6 img-container">
                <img src={note} alt=""/>
                </div>
            </div>
           
        </div>
    )
}

export default DasboardAllTaskEmpty;
