export async function fetchUser() {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch('http://localhost:5000/user/1', 
    {
      method: 'GET',
      headers: headers
    }
  )

  return response.json()
}


export async function fetchUsersByRole(id) {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch(`http://localhost:5000/user/role/${id}/`, 
    {
      method: 'GET',
      headers: headers,
    }
  )

  return response.json()
}


export async function fetchAllUserRoles() {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch('http://localhost:5000/user/roles', 
    {
      method: 'GET',
      headers: headers,
    }
  )

  return response.json()
}


export async function addUser(body) {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}/user/add`, 
    {
      method: 'POST',
      headers: headers,
      body: body
    }
  )

  return response.json()
}