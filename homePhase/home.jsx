import React, { useState,useEffect } from "react";
import style from "./home.module.css"
import {useNavigate} from 'react-router-dom'
import LineChart from "../phaseCharts/chart1";
import LineChart2 from "../phaseCharts/chart2";
import Piechart from "../phaseCharts/piechart";
/*import Notification from "../notificationPhase/notification"; */
import Orders from "../ordersPhase/orders"; 
import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Home(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
     const response=await  fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
          const res=await response.json();
         localStorage.setItem('data1',JSON.stringify(res))
          setData(res)}
          fetchdata()
         },[] )
  let ldata=JSON.parse(localStorage.getItem('data1'))
     console.log(ldata)
  const navigate=useNavigate()
    return(
        <div >
            <div id={style.main_div}>
                  <div className={style.main_nav}>
                    <div id={style.prod_div}><h1 id={style.prod}>Product Admin</h1></div>
                    <div className={style.vna_bar}>
                    <div className={style.nav_top} onClick={()=>navigate('/')} id={style.dashboard} ><AiOutlineDashboard className={style.icon}></AiOutlineDashboard><a href=""><li>Dashboard</li></a></div>
                      <div  className={style.vna_tops} id={style.report}><AiOutlineFileDone className={style.icon} ></AiOutlineFileDone><a href=""><li>Reports
                        <select style={{width:"17px"}}>
                        
                          <option>Daily Report</option>
                          <option>Weekly Report</option>
                          <option>Yearly Report</option>
                        
                        </select>
                       </li></a></div>
                      <div  className={style.vna_tops} id={style.pro} onClick={()=>navigate('/Products')}><AiOutlineShoppingCart   className={style.icons}></AiOutlineShoppingCart><a href=""><li>Products</li></a></div>
                      <div  className={style.vna_tops} id={style.acc}><AiOutlineUser className={style.icons} ></AiOutlineUser><a href=""><li>Accounts</li></a></div>
                      <div  className={style.vna_tops}><AiOutlineSetting className={style.icons}></AiOutlineSetting><a href=""><li>Settings<select style={{width:"17px"}}>
                   
                            <option>Profile</option>
                            <option>Billing</option>
                            <option>Customize</option>
                        
                        </select></li></a></div>
                      </div>
                      <a href="" id={style.log} onClick={()=>navigate('/admin')}>Admin,<b>Logout</b></a>
                  </div>
                  <div className={style.body}>
                  <div  className={style.bdy_fst}>
                    
                     </div>
                  </div>
                
                
                
                 </div>
          
        </div>
    )
}
export default Home