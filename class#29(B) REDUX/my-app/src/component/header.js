import React, { Component } from 'react';
import Logoimage from '../image/k.jpeg'
import chapal from '../image/lod.png'
// one way for export defalt
// export default class Header extends React.Component{
   
// class Header extends React.Component{
//     render(){
//         return(
            
//           <nav className="navbar header  navbar-expand-lg navbar-light bg-light"  >
//           <a className="navbar-brand font-weight-bold"  href="#" style={{fontSize:30}} > Olx</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
//             <ul className="navbar-nav mr-auto">
              
              
//             <form className="form-inline my-2 my-lg-0">
//             <div className="input-group mb-3">
//   <div className="input-group-prepend">
//     <span  style={{background:"white",border:"black",outlineColor:"black"}} className="input-group-text"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
// <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
// </svg></span>
//   </div>
//   <input type="text" style={{background:"white",border:"cone",outlineColor:"black"}} className="form-control" aria-label="Amount (to the nearest dollar)"/>
//   <div className="input-group-append">
//     <span className="input-group-text" style={{background:"white",border:"black",outlineColor:"black"}}>        <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>

// </svg></span>
//   </div>
// </div>
//             <span class="input-group-text" style={{background:"white"}}>
              

              
//               <input id="form"  style={{border:"none",outline:"none"} }  className="form-control  mr-sm-2 " type="search" placeholder="Pakistan" aria-label="Search" />
//               {/* <i className="fas fa-angle-down"></i> */}
             
      
//              </span>
//               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                  
                
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item" href="#">Action</a>
//                   <a className="dropdown-item" href="#">Another action</a>
//                   <div className="dropdown-divider"></div>
//                   <a className="dropdown-item" href="#">Something else here</a>
//                 </div>
//               </li>
               
//             </ul>
            
//           </div>
//         </nav>
    
//             // <div className="Header">
              
//             //     <h2>Header</h2>
//             // </div>
//         )
//     }
// }
// export default Header
//second way

// suppose mna aik file ma multiple component bna ha 



// class Header extends React.Component{
//   render(){
//     // console.log("Props==>",this.props)
//       return(
//         <div className="Header">
              
//         <h2>Header</h2>
//         {/* Child sa parent ko data hum function ka zarya daga  */}
//         <Logo/>  <button onClick={()=>this.props.get_props("Sayalani")}>Send</button>
//         {this.props.name}
//         {this.props.email}
//         {this.props.page}
//     </div>

//       )}}

// class Logo extends React.Component{
//   render(){
//       return(

//         <div className="Logo">
//          <img src={Logoimage} width="50px" />

//         <h2>Logo</h2>
//     </div>

//       )}}
// // ab hum in dono components ko export kaise kra ga 
// // ma is tarh aik file sa multiple component export krsakta hon
// class Bolo extends Component{
//   render(){

//  return(
// <div className="Bolo">
// <nav className="navbar   navbar-expand-lg navbar-light bg-light"  >
//           <a className="navbar-brand font-weight-bold"  href="#" style={{fontSize:30}} > <img src={chapal} width="300px"/> </a>
          
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
//             <ul className="navbar-nav mr-auto">
              
              
//             <form className="form-inline my-2 my-lg-0">
//             <div className="input-group mb-3">
//   <div className="input-group-prepend">
//     <span  style={{background:"white",border:"black 1px solid",outlineColor:"black",borderRight:"none"}} className="input-group-text"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
// <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
// </svg></span>
//   </div>
//   <input type="text" style={{background:"white",border:" black 1px solid",outlineColor:"black",borderLeft:"none"}} className="form-control" aria-label="Amount (to the nearest dollar)"/>
//   <div className="input-group-append">
//     <span className="input-group-text" style={{background:"white",border:"black 1px solid",borderLeft:"none",outlineColor:"black"}}>        <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>

// </svg></span>
//   </div>
// </div>
//             <span class="input-group-text" style={{background:"white"}}>
              

              
//               <input id="form"  style={{border:"1px solid black",borderLeft:"none", outline:"black"} }  className="form-control  mr-sm-2 " type="search" placeholder="Pakistan" aria-label="Search" />
//               {/* <i className="fas fa-angle-down"></i> */}
             
      
//              </span>
//               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                  
                
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item" href="#">Action</a>
//                   <a className="dropdown-item" href="#">Another action</a>
//                   <div className="dropdown-divider"></div>
//                   <a className="dropdown-item" href="#">Something else here</a>
//                 </div>
//               </li>
               
//             </ul>
            
//           </div>
//         </nav>

// </div>

//     )
//   }
// }

// export {
//   Bolo,
//   Header,
//   Logo
// };