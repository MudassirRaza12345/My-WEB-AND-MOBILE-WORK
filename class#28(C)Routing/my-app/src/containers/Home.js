// routing
// import React from 'react'

// class Home extends React.Component{
//     render(){
//         return (
//             <h1> Home page</h1>
//         )
//     }
// }
// export default Home;


// ---Linking
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1> Home page</h1>
            <Link to="/about">Go to about </Link>
            {/* <a href="about"  */}
            </div>
            
        )
    }
}
export default Home;
