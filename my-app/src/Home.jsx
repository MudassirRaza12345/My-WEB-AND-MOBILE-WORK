import React from 'react'
import web from "../src/images/A33.gif"
import { NavLink } from 'react-router-dom';
import Common from './Common'
const Home = () => {
  return (
    <div>
       <Common 
       name="Grow your business"
        imgsrc={web} 
        visit='/Service'
         btname="Get Started"
       />

    </div >
  );
}

export default Home;
