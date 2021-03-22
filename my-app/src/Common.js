import React from 'react'
import web from "../src/images/A33.gif"
import { NavLink } from 'react-router-dom';
const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg" >
          <div className="row">
            <div className="col-10 mx-auto">

              <div className="row">



                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> RAZA Clothes</strong>
                  </h1>
                  <h2 className="my-3">
                    we are the team of talented web developer
                    </h2>
                  <div className="mt-3 mb-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary ">

                      {props.btname} </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2  header-img">

                  <img src={props.imgsrc} className="img-fluid animated" alt="home img" />



                </div>
              </div>
            </div>
          </div>
        </div>


      </section>




    </div>
  );
}

export default Common;
