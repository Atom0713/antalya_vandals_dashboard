import {headers} from './headers'


export async function fetcUserRole() {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/role/user_id/1`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}
