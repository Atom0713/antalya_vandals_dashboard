import { useState } from "react";

export function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

export function logout() {
  localStorage.removeItem("token");
  if (!localStorage.getItem("token")) {
    //check something in local storage so you can know
    // if you should reload or not

    window.location.reload();
  }
  return "you were logout";
}
