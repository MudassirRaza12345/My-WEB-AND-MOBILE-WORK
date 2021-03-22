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
        case "SETDATA":
            // switch ma jo cheez hum return kra ga wo upper wali initial state ma jakr save krado ga
            //to action ka ander jo data mera ps ae ga ma isko upper initial state ma  save krado ga
            return ({
                ...state,
            // users:[] to set-data krna ka upper state ma empty save krwada ga
            // users:"khali"
            // users:action.user
            users:[...state.users,action.user]

            })
            // ma multiple switch bhi bna sakta hon
             

            
        //     default:
        // return state
    }
    return state;
}
//ab ma is (reducer) global state ko container/home ma get kro ga 
