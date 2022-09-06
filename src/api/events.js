export async function fetchEvents() {
    const headers = {
      "Authorization": "Bearer token"
    }
    const response = await fetch('http://localhost:5000/event/', 
      {
        method: 'GET',
        headers: headers
      }
    )
  
    return response.json()
}

export async function fetchEvent(event_id) {
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch(`http://localhost:5000/event/${event_id}/`, 
    {
      method: 'GET',
      headers: headers
    }
  )

  return response.json()
}

export async function addEvent(body){
  const headers = {
    "Authorization": "Bearer token"
  }
  const response = await fetch(`http://localhost:5000/event/`, 
    {
      method: 'POST',
      headers: headers,
      body: body
    }
  )

  return response.json()
}