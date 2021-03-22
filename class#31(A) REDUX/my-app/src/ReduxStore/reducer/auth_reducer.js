const INITIAL_STATE  ={
    username:"Ali",
    email:"mudassirraza@gmail.com"
    
}
//sb sa phela mna aik object bnaya ha is ka baat aik function ma is ka call krka default
//parameter pass krdia ha 
export default (state = INITIAL_STATE,action) =>{
    console.log("auth_action=>",action)
    return state;
}

//ab mera 2 store ha 
//auth_reducer or app_reducer
//mujha in dono ko combine krna hoga to ma isi ReduxStore/reducer ma jo index.js ki file ha wha jao ga
//or likho ga  import {combineReducer} from 'redux;