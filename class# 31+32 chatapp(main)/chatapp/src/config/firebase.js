import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBbly4A5WFP4XocbzeE2JcItkXFBC4IF4c",
  authDomain: "facebookand-authen.firebaseapp.com",
  databaseURL: "https://facebookand-authen.firebaseio.com",
  projectId: "facebookand-authen",
  storageBucket: "facebookand-authen.appspot.com",
  messagingSenderId: "822822797591",
  appId: "1:822822797591:web:b26263a9c3b6c586bff752",
  measurementId: "G-JM1ZGTCK5Q"
};
  // Initialize Firebase

//   firebase.analytics();

var Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase;
