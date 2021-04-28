import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';
import './analytics.css'
Chart.defaults.plugins.legend.position='right'
Chart.defaults.plugins.legend.fullsize=false
Chart.defaults.plugins.legend.maxWidth='500'
const Analytics = () => {
  
    let backcolorArr=[
        '#009dfd',
        ' #00fd3a',
        '#0051fd ',
        '#fd005c'

    ]
    const data = {
        labels: [
          'allTask',
          'Completed',
          'important',
          'deleted'
        ],
        datasets: [{
          label: 'AllTaskx',
          data: ['100','10','40','30'],
          backgroundColor: backcolorArr
        }
        ]
      };
    useEffect(()=>{
        //all 
        //compl  
        //impo  
        //delete 
        var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data,
    });

    },[])
    return (
        <div className='dasboard-analytics'>
            
            <canvas id="myChart"></canvas>
            </div>
        
    )
}

export default Analytics;
