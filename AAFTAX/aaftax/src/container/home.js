import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../container/home.css'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import logoimg from '../images/logo.png'
import logo1 from '../images/1.jpg'
import logo2 from '../images/2.jpg'
import logo3 from '../images/3.jpg'



function Home() {
    return (
        <div className="mx-auto">
        <div className="mainpage ">
          {/* //start page */}
          <nav className="navbar mb-5  mx-auto   navbar-expand-lg navbar-dark fixed-top  p-2 " style={{backgroundColor: '#01579B'}}>
            <div className="container ">
              <a className="navbar-brand text-primary text-center text-uppercase rounded-pill p-3 " href="#" style={{fontSize: '20px', backgroundColor: 'white'}}><img src={logoimg} width={100} alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse    " id="navbarNav">
                <ul className="navbar-nav  text-center pl-auto  ml-auto  ">
                  <li className="nav-item active">
                    <a className="nav-link  " href="#">HOME <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">About Us</a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Service
                    </a>
                    <div className="dropdown-menu " style={{backgroundColor: '#00BCD4'}} aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href>Personal Taxes</a>
                      <a className="dropdown-item" href="#"> Coparate Taxes</a>
                      <a className="dropdown-item" href="#">Accounting</a>
                      <a className="dropdown-item" href="#"> Payroll</a>
                      <a className="dropdown-item" href="#">Bussiness Set up</a>
                      <a className="dropdown-item" href="#"> Coparate Taxes</a>
                      <a className="dropdown-item" href="#">Audit Assistance</a>
                      <a className="dropdown-item" href="#"> GST HST Return</a>
                      <a className="dropdown-item" href="#">Bookkeeping</a>
                    </div></li>
                  <li className="nav-item">
                    <a className="nav-link   " href="#">Resource</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  " href="#">Contact Us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Special Offer
                    </a>
                    <div className="dropdown-menu" style={{backgroundColor: '#00BCD4'}} aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Student Offer</a>
                      <a className="dropdown-item" href="#">Uber</a>
                    </div>
                  </li> 
                </ul>
              </div>
            </div>
          </nav>
          <br />
          <br />
          <br />
          <br />
           {/* second header */}
          <div className="secondheader mt-4  pt-5 " style={{backgroundColor: '#FFFF00', border: '1px solid #FFC200'}}>
            <div className="container  p-5">
              <div className="row px-2 mx-auto py-2 my-auto " style={{backgroundColor: '#0D47A1', border: '1px solid #0D47A1'}} >
                <strong className="my-auto mx-auto ">
                  <h1 className="S2   text-center text-uppercase" style={{backgroundColor: '#0D47A1', color: '#ffffff'}}>
                    Personal And Coparative Tax</h1>
                </strong>
              </div>
            </div>
          </div>
        </div>
         {/* slider  */}
        <div className="slider mt-2  pt-2">
          <div className="container p-2">
            <div className="row pt-4">
              <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                  <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={logo3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={logo1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={logo2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* line move */}
        <div className="nine p-3 m-3 ">
          <div className="container" style={{border: '1px solid #FFC400', backgroundColor: '#FFD740', borderRadius: '15px'}}>
            <div className="row py-3 px-3 ">
              <div className="col-md-12  mx-0 px-2 py-2 my-auto" style={{backgroundColor: '#FFC200'}}>
                <p className="mx-auto px-auto py-auto my-auto" style={{marginTop: '12px', backgroundColor: '#316DC3', color: 'white'}}>
                  <marquee direction="left" scrollamount={6} onmouseover="this.stop();" onmouseout="this.start();">
                    <font color="#FFFFFF">&nbsp;&nbsp;"Right Place For Accounting And Book keeping Need" . &nbsp;&nbsp;
                      <a href="https://web.facebook.com/saylaniwelfare/photos/a.258515937507690/3332489120110341/?type=3&theater" style={{color: 'blue'}}>More Details</a> &nbsp;&nbsp;
                      <font color="#00FF00">Email:tax@afftax.ca &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                      </font></font></marquee>          </p>
              </div>
            </div>
          </div>
        </div>
         {/* Third header */}
        <div className="third  pt-5 " style={{backgroundColor: '#BCAAA4', border: '4px solid #8D6E63', borderRadius: '15px'}}>
          <div className="container">
            <div className="row">
              <div style={{backgroundColor: '#01579B'}} className=" col-md-12    px-3 py-3 pt-md-5 px-auto pb-md-4 mx-auto text-center">
                <h2 className="thw text-center  text-white">Personal,Selfemployed or own a business we qualified to assit with you </h2>
              </div>
            </div>
            <div className="row">
              <div className="card-deck">
                <div className="card pt-md-5 pb-md-4 px-0" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className="fas fa-headphones  bg-success rounded-circle text-light p-2 m-3"> </i>Personal Taxes</h5>
                    <p className="card-text"> We Offer Accurate, Affordable, Convenient, And Timely Tax Services That You Can
                      Count On. Plus, We Provide You With Year Round Tax Support For Every Return We Prepare For You.</p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
                <div className="card pt-md-5 pb-md-4" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className="fas fa-rocket  bg-success rounded-circle text-white p-2 m-3"> </i>GST/AST</h5>
                    <p className="card-text"> By Entrusting Your Accounting Responsibilities To Our Experienced And Qualified
                      Accountant, You Leave Yourself Time To Focus On Your Core Business.</p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
                <div className="card pt-md-5 pb-md-4" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className="fas fa-shopping-bag   bg-success rounded-circle text-light p-2 m-3"> </i> Formation of Coporative
                    </h5>
                    <p className="card-text"> We Will Work Through The Process To Incorporate Your Business As A Federal Or A
                      Provincial Corporation With All Operational Licenses, Articles Of Incorporation, And Organizational
                      Minute.</p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card-deck">
                <div className="card pt-md-5 pb-md-4" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className=" fas fa-magic  bg-success rounded-circle text-light p-2 m-3"> </i>Business Plan</h5>
                    <p className="card-text"> Using Proper Tax Planning Strategy, Our Tax Professional Makes Your Businesses
                      Eligible For All The Tax Breaks That Are Available To Them.</p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
                <div className="card pt-md-5 pb-md-4" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className="fas fa-layer-group   bg-success rounded-circle text-light p-2 m-3"> </i> Payroll</h5>
                    <p className="card-text">
                      We Provide A Simple And Convenient Way To Pay Your Employees. We Have Earned The Trust Of Small And
                      Mid-Sized Companies, Managing Every Aspect Of Their Payroll Processing.
                    </p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
                <div className="card pt-md-5 pb-md-4" style={{backgroundColor: 'transparent', border: '1px solid transparent'}}>
                  <div className="card-body" style={{backgroundColor: 'white', border: '1px solid whitesmoke'}}>
                    <h5 className="bx"> <i style={{fontSize: '30px'}} className="fas  fa-briefcase  bg-success rounded-circle text-light p-2 m-3"> </i>Quality of management
                    </h5>
                    <p className="card-text">
                      Handling Of Improper Reassessment Can Greatly Impact The Success Or Failure Of The Business. Our Tax
                      Professional Will Advise You Presenting Your Viewpoint Effectively To CRA.
                    </p>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'transparent', border: '1px'}}>
                    <button style={{border: '1px solid #063d69', backgroundColor: '#063d69'}} className="  rounded-pill text-light    px-3"><i className="fas fa-book-open text-light m-2" style={{fontSize: '20px'}} /> <a className="text-light" href>Read more</a> </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* fouth header */}
        <div className="fourth m-3 p-3" style={{backgroundColor: '#000000', border: '1px solid #000000', borderRadius: '25px'}}>
          <div className="container">
            <div className="row mx-3 my-3" style={{backgroundColor: '#212121'}}>
              <div className=" col-md-12   px-1 py-1 pt-md-3 pb-md-2 mx-auto my-auto" style={{backgroundColor: '#212121'}}>
                <h5 className="S2  text-white">AAFTAX beliving in developing strategic partnership with its clients
                  and timely provide the "numbers" for their strelagic decisions
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* fifthth header */}
        {/* sixth */}
        <div className=" sixth" style={{backgroundColor: '#28a745', border: '3px solid #1B5E20', borderRadius: '50px'}}>
          <div className="container">
            <div className="row mt-4 mx-auto my-auto px-auto py-auto ">
              <div className="col-md-3 mb-3 mx-auto my-auto px-auto py-auto">
                <p>
                  <span style={{fontFamily: 'calibri, sans-serif', color: '#ffffff', fontSize: '20px'}}>
                    <strong>Toronto:</strong>
                  </span>
                  <br />
                  <span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>747 Don Mills Road,
                    #11A,</span>
                  <br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Toronto, ON.
                    M3C
                    1T2</span>
                  <br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Ph:
                    647.351.6767</span>
                  <br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Mon-Fri: 10am
                    To
                    7pm</span>
                  <br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Sat: 10am to
                    5pm</span>
                  <br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Sun:
                    Closed</span>
                </p>
              </div>
              <div className="col-md-3 mb-3 mx-auto my-auto px-auto py-auto">
                <p><span style={{fontFamily: 'calibri, sans-serif', color: '#ffffff', fontSize: '20px'}}><strong>North
                      York:</strong></span><br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>1448 Lawrence Ave. E.,
                    Unit
                    20B,</span><br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Toronto,
                    ON M4A 2V6</span><br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Ph:
                    647.351.6767</span><br /><span style={{fontSize: '18px', fontFamily: 'calibri, sans-serif', color: '#ffffff'}}>Mon-Fri: 9am to 5pm
                  </span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>Sat
                    &amp; Sun:
                    Closed</span></p>
              </div>
              <div className="col-md-3 mb-3 mx-auto my-auto px-auto py-auto">
                <p><span style={{color: '#ffffff'}}><strong><span style={{fontFamily: 'calibri, sans-serif', fontSize: '20px'}}>Mississauga:</span></strong></span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>3411 Fieldgate Drive
                  </span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>Mississauga,
                    ON
                    L4X 2J4 </span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>Ph:
                    905.232.6767 </span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>Mon-Fri: 9am to 5pm
                  </span><br /><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px', color: '#ffffff'}}>Sat
                    &amp; Sun:
                    Closed</span></p>
              </div>
              <div className="col-md-3 mb-3 mx-auto my-auto px-auto py-auto">
                <p><span style={{fontFamily: 'calibri, sans-serif', color: '#ffffff'}}><strong style={{fontSize: '20px'}}>Menu:</strong></span><br /><span style={{color: '#ffffff'}}><a style={{color: '#ffffff'}} href><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18pxt'}}>Home</span></a></span><br /><span style={{color: '#ffffff'}}><a style={{color: '#ffffff'}} href><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px'}}>About Us</span></a></span><br /><span style={{color: '#ffffff'}}><a style={{color: '#ffffff'}} href><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px'}}>Services</span></a></span><br /><span style={{color: '#ffffff'}}><a style={{color: '#ffffff'}} href><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px'}}>Resources</span></a></span><br /><span style={{color: '#ffffff'}}><a style={{color: '#ffffff'}} href><span style={{fontFamily: 'calibri, sans-serif', fontSize: '18px'}}>Contact Us</span></a></span></p>
              </div>
            </div>
          </div>
        </div>
        {/* eight */}
        <div className="eight mt-2" style={{backgroundColor: '#01579B', borderTop: '3px #063d69 solid', borderRadius: '25px'}}>
          <div className="container">
            <div className="row p-4">
              <div className="col-md-10 text-center text-white">
                <span className="copyright " style={{fontSize: '18px'}}>AAFTAX Solutions © 2010 | All Rights Reserved
                </span>
              </div>
              <div className="col-md-2">
                <div>
                  <ul className="list-inline">
                    <li className="list-inline-item"> <a href><img style={{color: 'none'}} src="images/twitter.png" width={40} alt="" /> </a> </li>
                    <li className="list-inline-item"> <a href> <img style={{backgroundColor: 'none'}} src="images/fb.png" width={40} alt="" /></a></li>
                    <li className="list-inline-item"> <a href> <img style={{backgroundColor: 'none'}} src="images/link.png" width={40} alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
  
  export default Home;
  