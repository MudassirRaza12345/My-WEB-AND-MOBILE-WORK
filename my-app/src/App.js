 import React from 'react'
 import Home from "./Home"
 import About from "./About"
 import Services from "./Services"
 import Contact from "./Contact"
// import {Switch,Route} from 'react-router-dom'
import { Switch,BrowserRouter as Router, Route, Redirect} from "react-router-dom";
// ma switch bhi used krsakta ho or switch ki jga roter bhi

// ab ma bootstarp 5 lago ga
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// js of bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// Bootstrap
import Navbar from './Navbar'
//  jQUERY


const App=() =>{
  return (
    <div>
      
 
      <Navbar/> 
      
         <Switch>
         <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        
         </Switch>
       
        {/* OR */}
        {/* <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} /> */}
{/* yani upper wala path  sa(e.g /raza) koi bhi match na ho to home page pr la ae */}
        {/* <Redirect to="/" / >

        </Router>
         */}
        
         
      
         
      {/* exact :yani agr mna /About likha ha to wo dekha otherwise nhihome pr hi rha /  */}
       
    </div>
  );
}

export default App;
