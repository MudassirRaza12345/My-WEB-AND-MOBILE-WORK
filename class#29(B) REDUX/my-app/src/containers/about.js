//routing
// import React from 'react'

// class About extends React.Component{
//     render(){
//         return (
//             <h1> About page</h1>
//         )
//     }
// }
// export default About;

//Linking
import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component{
    gotohome=()=>{
        // jb hum link used to wo default prop bnadeta ha 
        // console.log(this.props)
        this.props.history.push('/')
        // push ma hum wo path dega jha humko jana ha  /--> yani home 
    }

    render(){
        return (
            <div>
            <h1> About page</h1>
            {/* <Link to="/">Go to home </Link> */}
            {/* ab hum dekhta ha javascript sa dosra route pr kaise jaa ga */}
            <button onClick={this.gotohome} > Go to Home</button>

            </div>
        )
    }
}
export default About;