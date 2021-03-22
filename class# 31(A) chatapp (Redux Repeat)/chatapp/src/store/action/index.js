//action==>jitna bhi functional kaam hoga wo like firebase sa data lena ha 
//reducer ==>hamri state ka lia hogya jo ka global hogi

const set_data = (data) => {
    // console.log("hello ma chal rha hon")
    return (dispatch) => {
        // console.log(data)
        dispatch({ type: "SetData", data:data })
        // console.log("hello ma chal rha hon")
    }
}
export {
    set_data
}
//jb bhi dispatch call hoga wo action ma run hoga jo humna reducer ma bnaya ha
