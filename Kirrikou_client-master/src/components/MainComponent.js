import React, { Component } from 'react';



import Shops from './ShopsComponent';
import Chat from './ChatComponent';

import Sell from './SellProductComponent.js';
import Home from './HomeComponent';
import Buy from './BuyProductComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
        
    };
  }


  render(){
   
    return (
      <div>
        
        <BrowserRouter>
        <Switch>
              <Route path='/home' component={Home} />
              <Route path='/buyproduct' component={Buy} />
              <Route path='/shops' component={Shops} />
              <Route path='/sell' component={Sell} />
              <Route path='/chat' component={Chat} />

              <Redirect to="/home" />
          </Switch>
          </BrowserRouter>
       
        
    </div>
    );
    
  }
  
}


export default Main;