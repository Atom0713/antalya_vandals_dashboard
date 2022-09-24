export async function fetchEvents() {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/`, {
    method: "GET",
    headers: headers,
  });

  return response.json();
}

export async function fetchEvent(event_id) {
  const headers = {
    Authorization: "Bearer token",
  };
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
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/`, {
    method: "POST",
    headers: headers,
    body: body,
  });

  return response.json();
}


export async function addEventAttendance(body, event_id) {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/event/attendance/${event_id}/`, {
    method: "POST",
    headers: headers,
    body: body,
  });

  return response.json();
}


export async function fetchEventAttendance(event_id) {
  const headers = {
    Authorization: "Bearer token",
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/event/attendance/${event_id}/`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}

