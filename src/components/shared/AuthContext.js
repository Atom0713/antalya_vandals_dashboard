import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();
  const [token, setToken] = useState(() => {
      if (localStorage.getItem("access_token")) {
        console.log(jwt_decode(localStorage.getItem("access_token")));
        return localStorage.getItem("access_token")
      }
      return null;
    }
  );

  // if(!token){
  //   console.log("to login")
  //   navigate("/login")
  // }

  function logout() {
    localStorage.removeItem("access_token");
    window.location.reload();
    // navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ token, user, setUser, userRole, setUserRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;