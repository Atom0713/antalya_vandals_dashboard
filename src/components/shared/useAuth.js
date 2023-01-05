import { createContext, useContext, useMemo } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const login = async (token) => {
    setToken(token);
    navigate("/", { replace: true });
  };


  const logout = () => {
    removeToken();
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  return useContext(AuthContext);
};