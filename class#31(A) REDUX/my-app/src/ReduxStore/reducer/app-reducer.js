const INITIAL_STATE  ={
    app_name:"Chat",
}
//sb sa phela mna aik object bnaya ha is ka baat aik function ma is ka call krka default
//parameter pass krdia ha 
export default (state = INITIAL_STATE,action) =>{
    console.log("app_action=>",action)
    switch(action.type){
case "SetData":
return ({
    ...state,
    app_name:action.data
})    
    }
    return state;
}

