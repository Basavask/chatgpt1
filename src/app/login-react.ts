Here is the equivalent ReactJS code based on the provided AngularJS code:

```
import React, { useState } from 'react';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Code to execute login functionality
    console.log('Logged in successfully!');
    setLoggedIn(true);
    // Redirect to user dashboard
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      {loggedIn && <p>You are now logged in!</p>}
    </div>
  );
}

export default Login;
```