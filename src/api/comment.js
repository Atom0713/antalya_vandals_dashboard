export async function addComment(comment, event_id, user_id) {
    const headers = {
      Authorization: "Bearer token",
    };
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/comment/`, {
      method: "POST",
      headers: headers,
      body: {"comment": comment, "event_id": event_id, "user_id": user_id},
    });
  
    return response.json();
  }
  