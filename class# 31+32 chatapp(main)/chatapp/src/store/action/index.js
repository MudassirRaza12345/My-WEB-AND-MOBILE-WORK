//action==>jitna bhi functional kaam hoga wo like firebase sa data lena ha 
//reducer ==>hamri state ka lia hogya jo ka global hogi

// const set_data = (data) => {
//     // console.log("hello ma chal rha hon")
//     return (dispatch) => {
//         // console.log(data)
//         dispatch({ type: "SetData", data:data })
//         // console.log("hello ma chal rha hon")
//     }
// }
// export {
//     set_data
// }
//jb bhi dispatch call hoga wo action ma run hoga jo humna reducer ma bnaya ha

// const set_data = (data) => {
    
//     return (dispatch) => {
//         // console.log("running..")
//         dispatch({ type: "SETDATA", user:{name:"ALi",email:"mudassirraza12345@gmail.com"} })
//         // jb ya dispatch run hoga to is ka data chala gae reducer ki file ma or
//         // wha export ka ander action ka attributes ma save hojaa ga 
//     }

// }

// Facebook Auth work
import Firebase from '../../config/firebase';
import firebase from 'firebase'
// import {useHistory} from 'react-router-dom'
// agr ma chataha hon ka ma aik login sa chata wala page pr chala jaa


// import FacebookLogin from 'react-facebook-login' 
const facebook_login=(history)=>{
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ab mujha jo isma jo kam cheeza chya  wo get krlo ga 
            let create_user={
              name:user.displayName,
              email:user.email,
              uid:user.uid,
              profile:user.photoURL
          }
            console.log("userid==>",user,create_user)
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            //ma fire base ka sath apna data apni redux application ko bhi send kro ga (reducer/index.js)
            .then(()=>{
              alert('user login sucessfully!')
              dispatch({type:"SETUSER",payload:create_user})
              history.push('/Chat')
              // ab ma yha sa ya addres da rha hon to wo login hokr history pr chala jaaga 


            })
            // ab ma chata hon ya login hoka ajaa chat screen pr 


            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
             
            
          });
    }

}

// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
// export {
//     set_data,facebook_login}
export {
    facebook_login}
