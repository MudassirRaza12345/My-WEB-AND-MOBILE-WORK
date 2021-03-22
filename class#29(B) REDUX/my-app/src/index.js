import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons' 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import {Provider} from 'react-redux';
//redux humko ko aik component derha ha provider or mujha keh rha ka apni pori application 
//ko is ma rakh do is sa mere pori application react sa connect ho ja gi  

// ab mujha apna store matlab redux store ko as a prop pass krna ha to ma phela apna store ko import kro ga  
import store from './ReduxStore'  

ReactDOM.render(
  // ab mujha apna store matlab redux store ko as a prop pass krna ha to ma phela apna store ko import kro ga  
  <Provider store={store}>
    <App />
    </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
