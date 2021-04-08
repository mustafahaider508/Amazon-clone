import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import "./ReactSlider.css";

 const CustomSlider = () => {
      const settings =  {
        dots: false,
        arrows: false,
        autoplay: true,
      };
      return (
        <div>
         
          <Slider {...settings} >
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" />
            </div>
            <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" />
            </div>
            <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" />
            </div>
            <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" />
            </div>
            
         
            
            
            
           
          </Slider>
        </div>
      );
    }
    export {CustomSlider};
