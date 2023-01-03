import {headers} from './headers'

export async function fetchEvents() {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/`, {
    method: "GET",
    headers: headers,
  });

  return response.json();
}

export async function fetchEvent(event_id) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/event/${event_id}/`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}

export async function addEvent(body) {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  return response.json();
}


export async function addEventAttendance(body) {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/attendance/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  return response.json();
}
