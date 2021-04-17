
import React, {Component } from 'react';

 import TopRated from './components/TopMovie';

 import NewMovie from './components/UpMovie';

 import Wapp from './components/layout';
 
 import {
  BrowserRouter as Router,

  Route,
 
} from "react-router-dom";






export class App extends  Component{


  
 
  render(){
    return(
     
      <div>  
      
        <Wapp />
<Router>
  <Route path="/top" component={TopRated}></Route>
  <Route path="/com" component={NewMovie}></Route>


</Router>

      </div>
      
    )
  }
}

export default App;


