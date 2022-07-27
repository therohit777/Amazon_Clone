import React from 'react';
import "../Css/product.css";

export const Product = ({title,image,price,rating}) => {
  return (
    <div className='Product'>
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((k,i)=>(
                    <div key={i}>
                      <p>⭐</p>
                    </div>
                ))}
            </div>
            <img src={image} className='product_image' />
            <div className="button_row">
               <button className='pro_button'>Add to Basket</button>
            </div>
        </div>

    </div>
  )
}
