
import React, {Component } from 'react';
import {  Breadcrumb } from 'react-bootstrap';


export class Wapp extends  Component{


 

 render(){
   return(
    
     <div>  
      
      
      <Breadcrumb>
  <Breadcrumb.Item href="http://localhost:3000/top">
  Top Movies
  </Breadcrumb.Item>
  <Breadcrumb.Item href="http://localhost:3000/com">Up Coming Movies</Breadcrumb.Item>
</Breadcrumb>


     </div>
     
   )
 }
}

export default Wapp;


