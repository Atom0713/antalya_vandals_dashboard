# JSX Prevents Injection Attacks
It is safe to embed user input in JSX:

    const title = response.potentiallyMaliciousInput;
    // This is safe:
    const element = <h1> {title} </h1>;


By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
