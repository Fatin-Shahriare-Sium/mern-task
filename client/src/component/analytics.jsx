import React, { useEffect, useState } from 'react'
import { PolarArea,defaults } from 'react-chartjs-2'
import './analytics.css'
defaults.plugins.legend.position='right'
const Analytics = () => {
  let[dataArr,setDataArr]=useState([])
  let cookie=localStorage.getItem('__toketasjy42562627')

    let backcolorArr=[
        '#009dfd',
        ' #00fd3a',
        '#0051fd ',
        

    ]

    const data = {
      labels: [
        'allTask',
        'Completed',
        'important'
      ],
      datasets: [{
        label: 'AllTaskx',
        data: dataArr,
        backgroundColor: backcolorArr
      }
      ]
    };
    // const optionx = {
    //   legend: {
    //       position: 'right',
        
    //   }
    // }
    useEffect(()=>{
        //all 
        //compl  
        //impo  
        //delete 
        fetch('/auth/userdata',{
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
        let user=data.user
        console.log(data);
        let datax=[user.taskAll.length,user.completedTask.length,user.important.length]
        setDataArr(datax)
      })
    
    },[])
    return (
        <div className='dasboard-analytics'>
            <PolarArea
            data={data}
            />
            </div>
        
    )
}

export default Analytics;
