import * as types from "./actiontypes"

const initialState={
    authStatus:false,
    isLoading:false,
    isError:false,
    error:"",
    userdata:{}
}

export const postReducer=(state=initialState,action)=>{
    const{type,payload}=action

    switch (type) {
        case types.LOGIN_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case types.LOGIN_SUCCESS:{
            return{
              ...state,
              userdata:payload,
              authStatus:true,
              isLoading:false,
              isError:false,
              error:""
            }
        }
        case types.LOGIN_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
                error:payload,
                userdata:{}
            }
        }
        case types.SIGN_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case types.SIGN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                error:""
            }
        }
        case types.SIGN_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
                ,
                error:payload
            }
        }
        
        default:return state
    }
}