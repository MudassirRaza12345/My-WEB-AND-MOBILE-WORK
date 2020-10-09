//sign
const facebook_login = () =>{
var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user ===>",user)
    //for display user name
    console.log("user ===>",user.displayName)
     //yani login ho to is page pr ajaa
    //  window.location="home.html"
    // ...
  }).catch(function(error) {
      console.log(error.message)
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // // ...
  });
}

//sign out
const facebook_signout=() =>{
  firebase.auth().signOut().then(function() {
    //yani logout ho to is page pr ajaa
    window.location="login.html"
    console.log("Sign-out successful")
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

} 