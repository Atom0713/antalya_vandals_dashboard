export async function fetcUserRole() {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/role/user_id/1`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}
