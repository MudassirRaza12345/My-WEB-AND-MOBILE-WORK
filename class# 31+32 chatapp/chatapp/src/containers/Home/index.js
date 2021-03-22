import React from 'react';
//mna redux sa data get krna apna component ka ander 
import {connect} from 'react-redux';
import './style.css';
// import {set_data,facebook_login} from '../../store/action'
import {facebook_login} from '../../store/action'


class Home extends React.Component{
     render(){
         
        // console.log("home props=>",this.props)
        return(
            <div>
                <h1>Home </h1>
                {/* <button onClick={()=>this.props.set_data()}>SET DATA </button> */}
                {/* Facebook Auth work */}
                <button onClick={()=>this.props.facebook_login()}>Facebook  Login </button>

                {/* is ma mna mapdispatchtoprop ma jo function bnaya ha set_data  wo pass krdo ga
                or is set data ma dispatch ma set_data ka function jo action ma ha wo ps krda ga 
                */}
                 
            </div>
        )
    }

}
const mapstatetoprops=(state)=>({
    // name:"ghous"
    // ab ma yha jo properties hum bna ga wo upper home ka component ma save hojaa gi
    // ma chata hon mujha gllobal state ka data mila to ma upper function ma state pass krdoga jis sa ma 
    //global state ka data get kr lo ga 
    // mna likha name(variable) : state.users(property name)
    users:state.users
})
//ab mna data set to krlya ab data get kaise kraa ga wo dekhta ha 
const mapdispacetoprops=(dispatch)=>({
    // set_data:()=>dispatch(set_data()),
    facebook_login:()=>dispatch(facebook_login()),

    //jo bhi functin hum dispatch ma rakha is ko alag file ma bnaa(store/action)

})

export default connect(mapstatetoprops,mapdispacetoprops)(Home);
//connect 2 attribute laga 
//1.mapstatetoprop (is ma state hoti ha jo humko redux sa milti ha ) 
// 2.mapdispacetoprop (functions hota ha jis ma ap actions ap bnata ha)

// //ab ma is (reducer) global state ko container/home ma get kro ga 

//is ka lia connect  ko import krwaa ga react redux sa 