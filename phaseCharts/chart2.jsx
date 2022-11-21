import React from "react";
import style from './charts.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function LineChart2(){
    let ldata=JSON.parse(localStorage.getItem('data1'))
    console.log(ldata)
    let obj={...ldata.dasbhoardPage.performance}
console.log(Object.keys(obj))

 const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
       
      },
    },
    responsive: true,
    plugins: {
      legend: {
        
        position: 'top',
        backgroundColor:'#dc3545',
        labels:{
            color:"white",
        }
      },
      
    },
    scales:{
        y:{
            
            ticks:{color:'white'}
        },
        x:{
            min:25,
            max:60,
            
            maxBarThickness:8,
            ticks:{color:'white'}
        },
       
    }
  };
  
  const labels = Object.keys(obj);
  
   const data = {
    labels,
    datasets: [
      {
        label: '# of Hits',
        data:Object.values(obj),
        backgroundColor:['#17a2b5','#007bff','#20c987','#fd7e17','#6f42c3','#dc3549','#ffc102',],
        padding:'3px',
        border:'none',
        width:'2px',
        barThickness:11,
      },
     
    ],
    
  };
    return(
        <div>
          
            <div className={style.div_chart}>
            <p>Performance</p>
<Bar
data={data}
options={options}
></Bar></div>
        </div>
    )
}
export default LineChart2