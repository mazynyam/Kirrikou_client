


import React,{Component} from 'react';
  import Main from './components/MainComponent';
  import { BrowserRouter } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap-carousel';
 
import './App.css';




class App extends Component {

  
  
  render() {
    
   return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
   );
  }
 }


    
    export default App;
  
