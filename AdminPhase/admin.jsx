import React from "react";
import { IconBase } from "react-icons";
import {useNavigate} from 'react-router-dom'
import style from './admin.module.css'
import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Admin(){
    const navigate=useNavigate()
    
    return(
     <div id={style.main1}>
          <div id={style.main}>
                
           </div> 
           <div>
        <div className={style.ad_main}>
            <div className={style.admins}>
            <form>
                 <p>Welcome to Dashbord,Login</p>
                <label className={style.lbl}>Username</label><br/>
                <input type="text" className={style.upass} required></input><br/>
                <label className={style.lbll}>Password</label><br/>
                <input type="text" className={style.upass} required></input><br/>
                <button type="login"  className={style.lgn} onClick={()=>navigate('/')}>Login</button><br/>
                <button type="text"  className={style.lgn} onClick={()=>navigate('/')}>Forgot Your Password?</button>
            </form>
            </div>
            </div>
               
        </div>
        <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
        </div>
    )
}
export default Admin