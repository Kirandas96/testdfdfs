import { useSelector } from "react-redux"; 
 import { Navigate ,useLocation} from "react-router-dom"; 

  
  
 export const PrivateRoute = ({children}) => { 
 const data=useSelector(state=>state.authReducer.authStatus) 
 const location=useLocation() 
  
 if(!data){ 
  return<Navigate state={{location}} to={"/login"} replace/> 
 } 
 else{ 
  return children 
 } 
  
 
 }; 
  
