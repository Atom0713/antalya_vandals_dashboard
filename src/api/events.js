export async function fetchEvents() {
    const headers = {
      "Authorization": "Bearer token"
    }
    const response = await fetch('http://localhost:5000/events/', 
      {
        method: 'GET',
        headers: headers
      }
    )
  
    return response.json()
}