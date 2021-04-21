import React, { useState } from 'react'
import moment from 'moment';
const Clock = () => {
    let [time,setTime]=useState( moment().format('LTS'))
    function updatedTime(){
        setTime(moment().format('LTS'))
        
    }
    // setInterval(()=>{
    //         updatedTime()
    // },1000)
  setInterval(updatedTime,1000)
    
    return (
        <div>
            
            <p>{time}</p>
        </div>
    )
}

export default Clock;
