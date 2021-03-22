import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {set_data} from '../../store/action'

class Home extends React.Component{
    static getDerivedStateFromProps(props,state){
        console.log("props==>",props)
    }
    render(){
        let user ={
            name:"umair",
            email:"umair@gmail.com"
        }
        // console.log("props=>",this.props)
        return(
            <div>
                <h1>Home </h1>
                <button onClick={()=>this.props.set_data(user)}>SetData</button>
            </div>
        )
    }

}
const mapStateToProps = (state ) => {
    return{
       users:state.users
 }
 }

 const mapDispatchToProps = (dispatch) => ({
    // dispatch => global state ma jao or property ko update krdo
    //actions sa data ata ha is ma 
     set_data:(data) => dispatch(set_data(data))
  })
  

export default connect(mapStateToProps,mapDispatchToProps)(Home);
//connect 2 attribute laga 
//1.mapstatetoprop (is ma state hoti ha jo humko redux sa milti ha ) 
// 2.mapdispacetoprop (functions hota ha jis ma ap actions ap bnata ha)

// //ab ma is (reducer) global state ko container/home ma get kro ga 

//is ka lia connect  ko import krwaa ga react redux sa 