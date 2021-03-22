import React from "react";
import {  BrowserRouter as Router,  Route} from "react-router-dom";
import Home from '../containers/Home';
 import About from "../containers/about";
  class AppRouter extends React.Component{
      render()
      {
        return (
            // parent
            // is router ka bna ga route yani child 
            <Router> 
              {/* child */}
              {/* Route ap sa 2 prop/attribute leta ha (1)  ha path (2)ha Component. 
              exact -> yani agr /  ho to hi Home  wala component ae otherwise na ae
              isi tarh agr  /about  ho to hi about  wala component ae otherwise na ae
              
              / -> represent root yani home page 
              // http://localhost:3000/about to about ka page ajaa ga 
              */}
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />


            </Router>
        )
      }
  }
  export default AppRouter;