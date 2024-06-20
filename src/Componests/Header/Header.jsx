import React from 'react';
import './Header.css'
import { assets } from '../../assets/assets';


function Header(){
    return(
        <div className="header">

            <img src={assets.header_img} alt="" />
            
            
            <div className='header-content'>
                <h2>Order your favorite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience, and delicious meal at a time.</p>
                <button>View Menu</button>
            </div>

            

        </div>
    )
}

export default Header;