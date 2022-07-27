import React from 'react';
import "../Css/home.css";
import banner from "../Images/banner.jpg";

export const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            <img src={banner} className="home_image" alt="" />
        </div>
    </div>
  )
}
