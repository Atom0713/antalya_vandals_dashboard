import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../api/login'

 
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
 
  const login = async (payload) => {
    await loginUser(
      payload
    )
    .then((response) => {
      localStorage.setItem("access_token",  response.access_token);

      setToken(response.access_token);
      navigate("/");
    })
  };
  return (
    <AuthContext.Provider value={{ token, user, setUser, userRole, setUserRole, login }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;