import * as api from "../api/index.js"

export const signup=(authData,navigate)=>async(dispatch)=>{
    try {
        console.log(api);
        const {data}=await api.signUp(authData)
        dispatch({type :'AUTH',data})
        navigate('/')//used for after login it navigates to auth page

    } catch (error) {
        console.log(error);
    }
}

export const login=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.signUp(authData)
        dispatch({type :'AUTH',data})
        navigate('/')//used for after login it navigates to auth page
    } catch (error) {
        console.log(error);
    }
}