export async function fetcUserRole() {
    const headers = {
      "Authorization": "Bearer token"
    }
    const response = await fetch('http://localhost:5000/role/user_id/1', 
      {
        method: 'GET',
        headers: headers
      }
    )
  
    return response.json()
}