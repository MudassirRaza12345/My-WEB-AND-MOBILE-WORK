 const INITIAL_STATE  ={
    users: [{
        name:"Raza",
        email:"mudassirraza12345@gmail.com"

        //mna global state yani reducer sa data yha get kro ga 
    },
    {
        name:"Ali",
        email:"Ali12345@gmail.com"

    }

]
    
}
//sb sa phela mna aik object bnaya ha is ka baat aik function ma is ka call krka default
//parameter pass krdia ha 
export default (state = INITIAL_STATE,action) =>{
    // console.log("action==>",action)
    switch(action.type){
        case "SetData":
        return ({
            ...state,
            users: [...state.users,action.data]
            
        })    
    default:
        return state       
    
    }
     
    // return state;
}
//ab ma is (reducer) global state ko container/home ma get kro ga 
