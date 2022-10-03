import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/Home/Home";
import { useToken } from "./components/auth";
import Layout from "./components/Layout/Layout";
import User from "./components/pages/user/User";
import Events from "./components/pages/events/Events";
import Event from "./components/pages/event/Event";

import { fetcUserRole } from "./api/role";
import { fetchUser } from "./api/user";

function App() {
  const { token, setToken } = useToken();
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    Promise.all([
      fetchUser(),
      fetcUserRole()
    ]).then((response) => {
        console.log(response[0])
        setUser(response[0].data);
        setUserRole(response[1].data);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );

  if (!user && !userRole) return (
    <div className="row">
      <h1>Loading...</h1>
    </div>
  )

  return (  
    <div className="wrapper">
      <Layout userRole={userRole} user={user}>
        <Routes>
          <Route path="/" element={<Home userRole={userRole} />}></Route>
          <Route path="/user" element={<User userRole={userRole} />}></Route>
          <Route
            path="/events"
            element={<Events userRole={userRole} user={user} />}
          ></Route>
          <Route
            path="/event/:id"
            element={<Event userRole={userRole} user={user} />}
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
