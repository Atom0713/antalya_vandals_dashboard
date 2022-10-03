export async function fetchUser() {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/`, {
    method: "GET",
    headers: headers,
  });

  return response.json();
}

export async function fetchUsersByRole(id) {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/user/role/${id}/`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}

export async function fetchAllUserRoles() {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/user/roles`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}

export async function addUser(body) {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/add`, {
    method: "POST",
    headers: headers,
    body: body,
  });

  return response.json();
}
