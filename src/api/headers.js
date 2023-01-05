export const headers =  {
    Authorization: "Bearer " + window.localStorage.getItem("token"),
    'Content-Type': 'application/json',
    'accept':'application/json'
  };