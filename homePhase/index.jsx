import React from "react";
import LineChart from "../phaseCharts/chart1";
import LineChart2 from "../phaseCharts/chart2";
import Piechart from "../phaseCharts/piechart";
import Orders from "../ordersPhase/orders";
import style from "./home.module.css"
import Home from "./home";
import Notification from "../notificationPhase/notfication";
function Index(){
    return(
    <div>
       
      < div className={style.div_chart}>
                  
                  <LineChart/>
                  <LineChart2/>
                  <Piechart/>
                <Notification/>
                 
                </div> 
                <Orders/>
                <div className={style.footer}>
                <footer>
                    <p> This copyright © 2018 All rights reserved. Design: Template </p>
                </footer>
               </div>
    </div>)
}
export default Index