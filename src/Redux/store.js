import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { postReducer } from "./Post/postReducer";

const rootReducer=combineReducers({
    authReducer,postReducer
    })

export const Store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)