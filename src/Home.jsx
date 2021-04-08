import React from 'react'
import Product from './Product';

import "./Product.css";
import {CustomSlider} from "./ReactSlider"


function Home() {
    return (
        <div  className="home">
        <div className="home__container">
        <div className="home_img">
        <CustomSlider />
        </div>
       {/* <img className="home_img"
      
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/ThewalkingdeadworldbeyondS1/WDWB_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB403059520_.jpg"
            alt=""
        /> */}

       
        <div className="home__row">
          <Product id="123324"
           title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price="11.96"
            rating={5}
          />
           <Product id="1237624" title="Truth Hurts: A captivating, breathless read Kindle Edition 'Rebecca Reid is a master of building tension'"
                 price="31.96"
                 image="https://m.media-amazon.com/images/I/41HzW0n2MYL.jpg"
                 rating={5}/>

                <Product id="123309" title="A Man of Some Repute (A Very English Mystery Book 1) Kindle Edition  A Very English Mystery"
                 price="1.96"
                 image="https://m.media-amazon.com/images/I/5128jcelHKL.jpg"
                 rating={5} />

              
        </div>
           
        
            <img 
                className="banner"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg" alt="image"
            />
           

        <div className="home__row1">
        <Product id="433324" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price="199.99"
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                  rating={5} />
        
         <Product id="125524" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price="598.99"
                  image="https://m.media-amazon.com/images/I/71g+ijTJizL._AC._SR360,460.jpg"
                  rating={5} />
          
           
          <Product id="188324" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                   price="98.99"
                   image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                   rating={5} />

<Product id="345546" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price="598.99"
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                  rating={5} />
                   

        </div>
 
        <div className="home__row2">
       
        <Product id="12344" title="Apple MacBook Pro t 4K Ultra HD HDR LED TV 55H "
                 price="2,479.00"
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQXLUbzsGjkQz_kSFLTyYFVPijQNDOkFqsrw&usqp=CAU"
                 rating={5}
        />


          
          <Product id="773324" title="LG TX55HX580B 55 Smart 4K Ultra HD HDR LED TV 55H"
                 price="144.95"
                 image="https://images-na.ssl-images-amazon.com/images/I/81OQmrmovWL._AC_SL1500_.jpg"
                 rating={5}/>

      <Product id="773324" title="LG TX55HX580B 55 Smart 4K Ultra HD HDR LED TV 55H"
                 price="144.95"
                 image="https://images-na.ssl-images-amazon.com/images/I/81OQmrmovWL._AC_SL1500_.jpg"
                 rating={5}/>
  
          <Product id="345546" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price="598.99"
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                  rating={5} />



        
        

        </div>
           

      

        <div className="home__row3">
        <Product id="12344" title="Apple MacBook Pro s Router, High Speed WiFi Router with 5dBi "
                 price="2,479.00"
                 image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg"
                 rating={5}
        />
          
          <Product id="773324" title="LG TX55HX580B 55 Smart 4K Ultra HD HDR LED TV WAVLINK AC1200 Dual-Band"
                 price="144.95"
                 image="https://images-na.ssl-images-amazon.com/images/I/81OQmrmovWL._AC_SL1500_.jpg"
                 rating={5}/>

             <Product id="129324"
            title="WAVLINK AC1200 Dual-Band Wireless Router, High Speed WiFi Router with 5dBi "
            image="https://images-na.ssl-images-amazon.com/images/I/51i6Ujt3d1L._AC_SL1280_.jpg"
            price="32.99"
            rating={5} /> 
          
          
          

        </div>

        </div>    
        </div>
    )
}


 export default Home
