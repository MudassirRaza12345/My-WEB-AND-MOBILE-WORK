import reducer from './reducer'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// create store ka jo method ha wo humko Redux sa milta ha 
// is ma humko batana hota ha ka jo store humna bnaya ha wo is ma pass krdo    
// islia mna nicha createStore() ma reducer ko pass kiya ha

const store =createStore(reducer,applyMiddleware(thunk))
export default store;

// //  AB mujha apna Reduxstore ko apni react ki application ka sath connect krana ha 
// //to ma main file   index.js pr jao ga or wha import kro ga import {provider} from 'react-redux' 
