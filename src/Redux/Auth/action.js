import * as types from "./actionTypes"
import axios from "axios"



export const getSignUp=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGN_REQUEST})
    return axios.post("https://fakeservermasai.herokuapp.com/api/users",payload)
    .then((res)=>{
    
        console.log(res.data)
        if(res.data.error===true){
            dispatch({type:types.SIGN_FAILURE},payload=res.data.message)
            return false
        }
        else{
            dispatch({type:types.SIGN_SUCCESS})
            return true
        }
        // console.log(res)
    })
    .catch(()=>dispatch({type:types.SIGN_FAILURE,payload:"Network Error"}))
}
export const getLogin=({email,password})=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.get(`https://fakeservermasai.herokuapp.com/api/users?email=${email}&password=${password}`)
    .then((res)=>{

        // console.log(res,"as")
        if(res.data.length==1){
            dispatch({type:types.LOGIN_SUCCESS,payload:res.data[0]})
            return true
        }
        else{
            return false
        }
        
    })
    .catch(dispatch({type:types.LOGIN_FAILURE,payload:"Network Error"}))
}

