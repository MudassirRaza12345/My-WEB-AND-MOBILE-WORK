//-----Redux (class #29 B)
//humna redux store ka naam ka folder bnaya ha or isma 
//index.js or isi folder ma aik or folder  reducer ka bnaya ha 
//is ma index.js ka naam ki file  bnae ha

//action==>jitna bhi functional kaam hoga wo like firebase sa data lena ha 
//reducer ==>hamri state ka lia hogya jo ka global hogi


// const INITIAL_STATE  ={
//     name:"Ghous",
// }
// //sb sa phela mna aik object bnaya ha is ka baat aik function ma is ka call krka default
// //parameter pass krdia ha 
// export default (state = INITIAL_STATE) =>{
//     return state;
// }



//now multiple reducer
import {combineReducers} from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app-reducer';

export default combineReducers({
    auth:auth_reducer,
    app:app_reducer
})
// isi tarh yha sara reducer combine ho kr aik sath export hoga

