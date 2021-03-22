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
// import FacebookLogin from 'react-facebook-login' 
const facebook_login=()=>{
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("user==>",user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
             
            
          });
    }

}


// export {
//     set_data,facebook_login}
export {
    facebook_login}
