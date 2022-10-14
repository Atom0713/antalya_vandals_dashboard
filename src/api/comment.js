import {headers} from './headers'


export async function addComment(body) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/comment/add`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
  
    return response.json();
}

export async function fetchEventComments(event_id) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/comment/event/${event_id}/`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response.json();
}

  