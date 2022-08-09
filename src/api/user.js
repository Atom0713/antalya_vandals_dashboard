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


export async function fetchAllUsers() {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch('http://localhost:5000/user/', 
    {
      method: 'GET',
      headers: headers,
    }
  )

  return response.json()
}
