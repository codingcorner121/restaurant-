import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'


import Navbar from './Componests/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Componests/Footer/Footer';
import LoginPopup from './Componests/LoginPopup/LoginPopup';



function App() {

  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    
      <div className='app'>

        
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          
        </Routes>  

           
        


      
        
      </div>
      <Footer/> 
      </>
  )
}

export default App
