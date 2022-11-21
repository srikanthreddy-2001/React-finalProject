import React from "react";
import style from "./products.module.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import Addnew from "./addnew";
import {useNavigate} from 'react-router-dom'


function Products(){
    const navigate=useNavigate()
    let ldata=JSON.parse(localStorage.getItem('data1'))
    return(
        <div>
           <div className={style.main}>
            <div className={style.div_pro}>
                <div  className={style.scr}>
                <table id={style.tbl}>
                    <tr> 
                        <th></th>
                        <th> PRODUCT NAME</th>
                        <th>CATOEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>UNIT SOLD</th>
                        <th>IN STOCK</th>
                        <th>EXPIRE DATE</th>
                        <th></th>
                        </tr>
                   {
                    ldata.productsPage.products.map(e=>
                      <tr className={style.tr}>
                        <td className={style.tr}><button type="radio" id={style.click} ></button></td>
                        <td className={style.tr}>{e.name}</td>
                        <td className={style.tr}>{e.category}</td>
                        <td className={style.tr}>{e.description}</td>
                        <td className={style.tr}>{e.unitSold}</td>
                        <td className={style.tr}>{e.stock}</td>
                        <td className={style.tr}>{e.expireDate}</td>
                        <td className={style.tr}><FaRegTrashAlt id={style.ico}/></td>
                        </tr> 
                    
                      )
                   }
                 
                </table>
                </div>
                <button className={style.cadd} onClick={()=>navigate('/addnew')}>ADD NEW PRODUCT</button><br></br>
                   <button  className={style.cadd}>DELETE SELECTED PRODUCTS</button>
            </div>
            <div id={style.smalltab}>
                <div id={style.pst}>
                <p>Product Categorys</p>
                <table>
                    <tr>
                        <th className={style.pstr}>Product Categories</th>
                        <th></th>
                    </tr>
                    {
                    ldata.productsPage.categories.map(e=>
                        <tr className={style.pstr}>
                            <td className={style.pstr}>{e}</td>
                           <td className={style.pstr}><FaRegTrashAlt id={style.ico1}/></td>
                        </tr>
                        )
                 
                    }
              
                </table>
               
                </div>
                <button className={style.cadd1} >ADD NEW PRODUCT</button>
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
export default Products