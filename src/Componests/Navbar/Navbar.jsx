import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar ({setShowLogin}){

    const [menu, setmenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);



    return(
        <div className="navbar">

            <Link to="/" ><img src={assets.logo} className= "logo" alt="" /></Link>
            <ul className='menu'>
                <Link to='/' onClick={()=>setmenu("home")} className={menu==="home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact-us</a>
            
            </ul>
            <div className='navbar-right'>
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className='navbar-search-icon'>
                <Link to="/cart" >
                <img src={assets.basket_icon} alt="" className="baskate-icon" />
                </Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
                
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>

            </div>
            
        </div>
    )
}

export default Navbar;

