
//   import React, { Component } from 'react';
import {Carousel,CarouselItem} from 'reactstrap';
  import Footer from './FooterComponent.js';
  import Header from './HeaderComponent.js';
  import React from 'react';

    
 function Home (props) {
    return(<>
    <div> <Header/>
    </div>
            
           
<div className="container-fluid">
    
   <Carousel>
  <CarouselItem>
    <img
      className="d-block w-100"
      src="assets/images/918010f062b30d08824d31b32d74e8de.jpg"
      alt="First slide"
    />
    
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src="assets/images/56a86c9749b8b_thumb900.jpg"
      alt="Third slide"
    />

    
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src="assets/images/shoe-sales-banners_23-2147518452.jpg"
      alt="Third slide"
    />

    
  </CarouselItem>
</Carousel>
</div>
<div id="sitewrapper" >
<Footer/>
</div>

        </> 
         
  
           


    )
}
  
export default Home;
  




