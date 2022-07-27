import React from 'react';
import "../Css/header.css";
import { MdSearch,MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  return (
    <div className='header'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="headerlogo"alt="" />
        <div className="searchcompo">
            <input type="text" className='headersearch_box'/>
             <MdSearch className='header_SearchIcon' />
        </div>
        <div className="navsection">
            <div className="nav_option">
                <span className='opt_line1'>Hello Guest</span>
                <span className='opt_line2'>Sign in</span>
            </div>
            <div className="nav_option">
                <span className='opt_line1'>Returns</span>
                <span className='opt_line2'>& Orders</span>
            </div>
            <div className="nav_option">   
                <span className='opt_line1'>Your</span>
                <span className='opt_line2'>Prime</span>
            </div>
            <div className="nav_optionbasket">
                <MdShoppingBasket className='headerbasketicon'/>
                <span className='opt_line2 nav_basketcount'>0</span>            
           
            </div>
        </div>
    </div>
  )
}
