export async function loginUser(credentials) {
    return fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}
