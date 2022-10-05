import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../api/login'

 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();
  const [token, setToken] = useState(() => {
      if (localStorage.getItem("token")) {
        let token = localStorage.getItem("token");
        // return jwt_decode(tokens.access_token);
        return token
      }
      return null;
    }
  );

  const navigate = useNavigate();
 
  const login = async (payload) => {
    const apiResponse = await loginUser(
      payload
    );
    localStorage.setItem("token",  apiResponse.token);

    setToken(apiResponse.token);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ token, user, setUser, userRole, setUserRole, login }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;