//-----Redux (class #29 B)
//humna redux store ka naam ka folder bnaya ha or isma 
//index.js or isi folder ma aik or folder  reducer ka bnaya ha 
//is ma index.js ka naam ki file  bnae ha

//action==>jitna bhi functional kaam hoga wo like firebase sa data lena ha 
//reducer ==>hamri state ka lia hogya jo ka global hogi

const set_data = (data)=>{
    // console.log("hello")
    return (dispatch)=>{
        // console.log("hello")
        dispatch({type:"Set data ",data}
    //ab ya dispatch humko app_reducer.js ma state ka parameter action ma  mila ga
        )

    }
}
export  {
    set_data
}