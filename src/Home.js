import React from 'react';
import "./Home.css";
import Product from './Product';
import HomeSlider from './HomeSlider';

function Home() {
    return (
        
        <div className="home">
        <div className="home_container">
        {/* <img className="home_img" src="https://m.media-amazon.com/images/I/71D7cj7+q4L._SX3000_.jpg" alt="home_Image."></img> */}
        <HomeSlider />
        
        <div className="home_row">
          <Product 
          id="1"
          title="New Apple iPhone 12 Pro Max (256GB Storage, 12GB RAM) - Blue" 
          price={79999.99} 
          rating={4} 
          image= "https://m.media-amazon.com/images/I/71X6mnUDSzL._AC_UY327_FMwebp_QL65_.jpg" />
          <Product 
               id="2"
              title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage)"
              price={149999.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71MmJNwZcML._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
          id="3"
          title="OnePlus 9R 5G ( Lake Blue Colour, 12GB RAM, 256GB Storage)"
              price={40500.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY327_FMwebp_QL65_.jpg" />
        {/*  signIn + product  */}
        </div>
     
        <div className="home_row">
        <Product id="4"
        title="GoPro HERO9 Black — Waterproof Action Camera Touch Screen 5K Ultra HD Video"
              price={36990.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/61Iyd3w+bKL._SL1500_.jpg"/>
          <Product id="5"
          title="Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 Lens (Black)"
              price={43500.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/81cEKnH692L._AC_UY327_FMwebp_QL65_.jpg"/>
          <Product id="6"
           title="Sony Digital Camera ZV 1 (Video Eye AF, Flip Screen, 4K Vlog Camera) - Black"
              price={59990.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/716sQB1HdPL._SL1500_.jpg"/>
          <Product id="7"
          title="Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S NIKKON 18-140mm Lens"
              price={80990.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/613pf1JTs9L._AC_UY327_FMwebp_QL65_.jpg"/>

        </div>

        <div className="home_row">
        <Product id="4"
        title="Peter England Men's Slim Shirt"
              price={943.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/91+T0WGCXLL._AC_UL480_FMwebp_QL65_.jpg"/>
              <Product id="7"
          title="Allen Solly Men's Regular Fit Polo"
              price={699.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/81r473subGL._UL1500_.jpg"/>
          <Product id="5"
          title="Fastrack Analog  Watch"
              price={2076.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/71CEEzbDS-L._AC_UL480_FMwebp_QL65_.jpg"/>
          <Product id="6"
           title="Red Tape men's Slim Fit Pants"
              price={1499.00}
              rating={3}
              image="https://m.media-amazon.com/images/I/71USE2n1vAL._AC_UL480_FMwebp_QL65_.jpg"/>
          <Product id="7"
          title="Philips corded & cordless Trimmer"
              price={1667.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/718Efmq2JiL._AC_UL480_FMwebp_QL65_.jpg"/>

        </div>

        <div className="home_row">
          <Product 
          id="1"
          title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey" 
          price={127900.99} 
          rating={4} 
          image= "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg" />
          <Product 
               id="2"
              title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 128GB) - Space Grey (5th Generation))"
              price={108999.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/81sxRBhe2sS._SL1500_.jpg"
          />
          <Product
          id="3"
          title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
              price={42900.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71j12hyvEVL._SL1500_.jpg" />
        {/*  signIn + product  */}
        </div>

          <div className="home_row">
               <Product id="8"
               title="Laptop and Printer combo offer"
              price={3798.00}
              rating={4}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Aug/Jupiter_Experiments/Freebie_1500X3005.jpg" />
            </div>
        
        <div className="home_row">
        <Product id="9"
        title="HP Chromebook Thin & Light 14-inch (35.6 cm)"
              price={32399.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg" />
              <Product id="10"
              title="StickerKing 5in1 Laptop Accessories Combo "
              price={399.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/81igPh-b2vL._AC_UY327_FMwebp_QL65_.jpg" />
        </div>

        </div>    
        </div>
    )
}

export default Home;
