import  { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export function RequiresAuth({ children }) {
  const authState = useSelector(state => state.auth);
  const token = authState.token || localStorage.getItem("token");
  const location = useLocation();
  const isUserLoggedIn = authState.user && token;
 

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
