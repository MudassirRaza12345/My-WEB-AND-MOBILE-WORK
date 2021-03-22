import React from 'react';
import {connect} from 'react-redux'
class Chat extends React.Component{
    render(){
        console.log("props",this.props)
        return(
            <div>Welcome! </div>
        )
    }
}

const mapstatetoprops=(state)=>({
 
    curent_user:state.curent_user
})
 
// const mapdispacetoprops=(dispatch)=>({
//      facebook_login:(history)=>dispatch(facebook_login(history)),

   
// })

export default connect(mapstatetoprops,null)(Chat);

//  ab hum link krna la lia react router install kra ga 
//npm i react-router-dom
//taqa homescreen sa chat screen pr jasaka
