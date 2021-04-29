import React from 'react'
import moment from 'moment'
import './recentTask.css'
const RecentTask = ({title,des,createdTime}) => {
    function timex(time){
        return moment(time).fromNow()
    }
    return (
        <div className='recent'>
            <p className='recent__tilte'>{title}</p>
           <div className='recent-bottom'>
            <p className='recent-bottom__des'>{des}</p>
            <p className='recent-bottom__time'>{timex(createdTime)}</p>
           </div>
        </div>
    )
}

export default RecentTask;
