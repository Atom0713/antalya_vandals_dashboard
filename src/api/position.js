import {headers} from './headers'

export async function fetchPositions(event_id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/positions`,
      {
        method: "GET",
        headers: headers,
      }
    );
  
    return response.json();
  }
  
    