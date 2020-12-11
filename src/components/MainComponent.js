import React, { Component } from 'react';



import Home from './HomeComponent';

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
              
              
              <Redirect to="/home" />
          </Switch>
          </BrowserRouter>
       
        
    </div>
    );
    
  }
  
}


export default Main;