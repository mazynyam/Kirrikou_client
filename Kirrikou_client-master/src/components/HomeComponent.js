
//   import React, { Component } from 'react';
import Footer from './FooterComponent.js';
import Header from './HeaderComponent.js';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  return (
    <>
      <div> <Header/>
      </div>


      <div className="container-fluid">
        <div class="row" >

        <div class="d-flex">

         <div>
          <Carousel id="mycarousel"   className="carousel slide carousel-fade " data-ride="carousel" data-interval="4">
            <Carousel.Item>
              <img 
                className="" id="rimg"
                src='assets/918010f062b30d08824d31b32d74e8de.jpg'/>
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item  >
            <Carousel.Item >
              <img 
                className="" id="getimage"
                src='assets/56a86c9749b8b_thumb900.jpg'/>
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="" id="himg"
                src='assets/121829563-advertisement-promotion-banner-for-trendy-colorful-brand-lipstick-fashion.jpg' />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
</div>
<div>
<Carousel id="prdcarousel" className="data-interval=5">
            <Carousel.Item>
              <img 
                className="" id="simg"
                src='assets/56a86c9749b8b_thumb900.jpg'/>
                
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item  >
            <Carousel.Item >
              <img 
                className="" id="timg"
                src='assets/121829563-advertisement-promotion-banner-for-trendy-colorful-brand-lipstick-fashion.jpg' />
            
               
                
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="" id="pimg"
                src='assets/918010f062b30d08824d31b32d74e8de.jpg'/>
                      <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          </div>
        </div>
<div class ="row">
     
      <div id="feat"><h3>Featured Products</h3></div>
      </div>
      </div>
      <div id="sitewrapper">
        <Footer/>
      </div>
     

    </>





  );
}

export default Home;





