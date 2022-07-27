import React from 'react';
import "../Css/checkout.css";
import Checkout_banner from "../Images/checkoutbanner.jpg";


export const Checkoutpage = () => {
  return (
    <div className='checkout'>
        <div className="checkout_left">
          <img src={Checkout_banner} className="check_ad" alt="None" />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
        </div>


        <div className="checkout_right">
          Rohit
        </div>

    </div>
  )
}
