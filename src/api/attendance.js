import {headers} from './headers'

export async function fetchEventAttendance(event_id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/event/attendance/${event_id}/`,
      {
        method: "GET",
        headers: headers,
      }
    );
  
    return response.json();
  }