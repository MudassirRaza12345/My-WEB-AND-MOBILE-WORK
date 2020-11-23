// * ==> matlab tamam cheeza firebase ma ajaa 
// import * as firebase from 'firebase/app'
import firebase from 'firebase/app';
// import  firebase from 'firebase'
// hum firebase ki konsi service used kr rha ha
import 'firebase/database';
import'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCkX7T5dCz1rdAd_6LMCr8rez_CDIwmo8w",
    authDomain: "olx-app-43112.firebaseapp.com",
    databaseURL: "https://olx-app-43112.firebaseio.com",
    projectId: "olx-app-43112",
    storageBucket: "olx-app-43112.appspot.com",
    messagingSenderId: "651418319447",
    appId: "1:651418319447:web:3cd983ab7d97632903c112",
    measurementId: "G-EG13QQYY5C"
};
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
