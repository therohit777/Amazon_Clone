import React from 'react';
import "../Css/home.css";
import banner from "../Images/banner.jpg";
import product1 from "../Images/Epic.png";
import product2 from "../Images/watch.jpg";
import product3 from "../Images/ipad.webp";
import product4 from "../Images/laptop.webp";
import product5 from "../Images/samtv.webp";
import product6 from "../Images/headset.webp";
import coco1 from "../Images/coco1.jpg";
import coco2 from "../Images/coco2.jpg";
import coco3 from "../Images/coco3.jpg";
import coco4 from "../Images/coco4.jpg";

import { Product } from './Product';


export const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            <img src={banner} className="home_image" alt="" />
        </div>
        <div className="home_row">
            <Product title="Do Epic Shit!" price={20.09} image={product1} rating={5}/>
            <Product title="Cosmic Byte Over the Ear Wired Headsets" price={319.29} image={product6} rating={4}/>
        </div>
        <div className="home_row">
            <Product title="Imported Ferrero Rocher 16 pcs - 200gm" price={21.09} image={coco1} rating={4}/>
            <Product title="BOGATCHI Gift Ideas, Happy Birthday Gifts." price={19.18} image={coco2} rating={5}/>
            <Product title="Assorted Chocolate Combo with Metal Basket | Chocolate Gift Hamper" price={17.99} image={coco3} rating={3}/>
            <Product title="Ferrero Rocher Chocolate 4 Pieces (Pack of 3)" price={24.99} image={coco4} rating={4}/>
        </div>
        <div className="home_row">
            <Product title="HONOR Magic Watch 2 (46mm, Charcoal Black) " price={110.09} image={product2} rating={4}/>
            <Product title="2021 Apple iPad Pro with Apple M1 chip -Space Grey" price={517.18} image={product3} rating={5}/>
            <Product title="Acer Predator Helios 500 Gaming Laptop) Ph517-52" price={1813.99} image={product4} rating={3}/>
        </div>
        <div className="home_row">
            <Product title="Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)" price="3539.77" image={product5} rating={4} />
        </div>
    </div>
  )
}
