import React from 'react';
import "./Home.css";
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <div className="home_container">
        <img className="home_img" src="https://m.media-amazon.com/images/I/71D7cj7+q4L._SX3000_.jpg" alt="home_Image."></img>
        
        <div className="home_row">
          <Product 
          id="1"
          title="mobile phone 8 GB ram 128 ROM" 
          price={11599.99} 
          rating={4} 
          image= "https://images-eu.ssl-images-amazon.com/images/I/41oSa4ZSOuS._AC_SX184_.jpg" />
          <Product 
               id="2"
              title="Logitech B170 Wireless Mouse"
              price={645.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/31N2n4tGvGL._AC_SY200_.jpg"
          />
          <Product
          id="3"
          title="boAt Stone Grenade 5 Watt speaker"
              price={1299.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/7195XDbPRGL._AC_UY327_FMwebp_QL65_.jpg" />
        {/*  signIn + product  */}
        </div>

        <div className="home_row">
        <Product id="4"
        title="Peter England Men's Slim Shirt"
              price={943.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/91+T0WGCXLL._AC_UL480_FMwebp_QL65_.jpg"/>
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
