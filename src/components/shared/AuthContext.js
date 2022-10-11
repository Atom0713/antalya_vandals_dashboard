import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();
  const [token, setToken] = useState(() => {
      if (localStorage.getItem("access_token")) {
        // return jwt_decode(tokens.access_token);
        return localStorage.getItem("access_token")
      }
      return null;
    }
  );

  const navigate = useNavigate();

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