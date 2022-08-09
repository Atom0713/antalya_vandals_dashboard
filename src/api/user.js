export async function fetchUser() {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch('http://localhost:5000/user/', 
    {
      method: 'GET',
      headers: headers
    }
  )

  return response.json()
}
