export function logout() {
  localStorage.removeItem("access_token");
  if (!localStorage.getItem("access_token")) {
    //check something in local storage so you can know
    // if you should reload or not

    window.location.reload();
  }
  return "you were logout";
}
