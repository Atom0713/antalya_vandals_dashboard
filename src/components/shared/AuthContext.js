import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

 
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

  return (
    <AuthContext.Provider value={{ token, user, setUser, userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;