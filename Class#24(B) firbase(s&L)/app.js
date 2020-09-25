//sign up account(make email and password)
let signup =() =>{
    let email=document.getElementById("email")
    let password=document.getElementById("password")
// console.log(email.value)
// console.log(password.value)


//firebase.auth() => firebase Authentication pr jao
//createUserWithEmailAndPassword(email, password)==>ya firebase ka function
//ha jo user or password create krta ha .or ya 2 argument leta ha
//phela ma wo leta ha email or dosra ma wo leta ha password
// hum yha likha ga email.value or password.value hum java script sa value 
//get krli ha kyuka 
firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
//acha jb bhi firebase pr dataleta to promise used krta ha 
  //.catch dya huwa ha or  .then ma apna lgadeta ho result ka lia
  .then((result) =>{
      console.log(result)
  })

.catch(function(error) {
        // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   console.log(errorMessage)
  });
}
//firebase ma ==>Authenticating ma ==>user ma email bn jaagi


//login in
let login =() =>{
    let email=document.getElementById("login-email")
    let password=document.getElementById("login-password")
// console.log(email.value)
// console.log(password.value)
firebase.auth().signInWithEmailAndPassword(email.value, password.value)
.then((result)=>{
    console.log("user login sucessfully")
    console.log(result)
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  

}
//firebase ma ==>Authenticating ma ==>user ma email bn jaagi