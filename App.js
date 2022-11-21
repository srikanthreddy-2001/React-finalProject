import React, { useEffect, useState } from "react";
import Admin from "./AdminPhase/admin.jsx";
import Home from "./homePhase/home.jsx";
import Index from "./homePhase/index.jsx";
import Products from "./productsPhase/items.jsx";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Addnew from "./productsPhase/addnew.jsx";

function App() {
  return (
    
      <div className="App" style={{backgroundColor:"#567086",fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
        <BrowserRouter>
        <Home/>
        <Routes>
     <Route path='/' element={<Index/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path="/addnew" element={<Addnew/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;