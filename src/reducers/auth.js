
const authReducer=(state={data :null},action)=>{
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))//data is recieved from actions data and stringify means converting into the string
            return {...state, data:action?.data};
        default:
            return state;
    }
  

}
export default authReducer;