import React, { useEffect, useState } from 'react'
import RecentTask from './recentTask'
import './dasboardHome.css'
import {Link} from'react-router-dom'
import Loading from './loading'
const DasboardHome = () => {
    let[loading,setLoading]=useState(true)
    let[recent,setRecent]=useState([])
    let cookie=localStorage.getItem('__toketasjy42562627')
    useEffect(()=>{
        fetch('/task/recent',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                haveCookie:cookie?true:false,
                isAuthenticated:cookie
            })
        }).then(res=>res.json())
        .then(data=>{
            setRecent(data.recent)
            setLoading(false)
        })
    },[])
    return (
        <div className='dasboard-home'>
            <p className='dasboard-home__title'>Your recently created post:</p>
            {loading?<Loading/>: recent.map((sig,index)=><Link to={`/dasboard/task/view/${sig._id}`}><RecentTask key={index} title={sig.title} des={sig.des} createdTime={sig.createdAt}/></Link>)}
        </div>
    )
}

export default DasboardHome;
