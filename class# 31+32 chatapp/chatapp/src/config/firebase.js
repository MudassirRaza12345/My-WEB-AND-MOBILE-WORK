import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var firebaseConfig = {
  apiKey: "AIzaSyDTSj4tGeJrEGcdthNtF3R7jPZcKRZuWt0",
  authDomain: "chat-app-in-react-94042.firebaseapp.com",
  projectId: "chat-app-in-react-94042",
  storageBucket: "chat-app-in-react-94042.appspot.com",
  messagingSenderId: "425334804022",
  appId: "1:425334804022:web:a5eecba1021ae5ccec1297",
  measurementId: "G-8HD7MY4EQ1"
  };
//   Initialize Firebase
 
//   firebase.analytics();

var Firebase=firebase.initializeApp(firebaseConfig)
export default Firebase;
