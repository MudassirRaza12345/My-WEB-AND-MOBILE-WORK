import React from 'react'
import {NavLink} from "react-router-dom";
// import "jquery/dist/jquery"

// replace a by Navlink and href by to by select through Ctrl+D
const Navbar =()=>{
    return (
        <div>
          <div className="container-fluid  mx-0 px-0">
            <div className="row mx-0 px-0">
              <div className="col-10 mx-auto ">

              
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/">RAZA CLOTHES</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'  className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'  className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'  className="nav-link" to="/contact">Contact us</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Dropdown
          </a>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li> */}
         
      </ul>
       
    </div>
  </div>
</nav>
</div>
            </div>
          </div>
       
        </div>
    )
}
export default Navbar;