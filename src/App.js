import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/pages/login/Login";
import Home from './components/pages/home/Home';
import { useToken } from './components/auth';
import Layout from './components/Layout/Layout'
import User from './components/pages/user/User';
import Events from './components/pages/events/Events';
import Event from './components/pages/event/Event';

import { fetcUserRole } from './api/role';


function App(){
  const { token, setToken } = useToken();
  
  const [userRole, setUserRole ] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    if (!token) return 
    fetcUserRole()
    .then(response => {
        setUserRole(response)
    })
    .catch(error => setError(error.message))
  }, []
  )

  if(!token) {
    return (
        <Login setToken={setToken} />
    )
  }

  if (error) return (
    <div>
       <h1>{error}</h1>
    </div>
  )
  return (
    <div className="wrapper">
      <Layout userRole={userRole}>
        <Routes>
          <Route path="/" element={<Home userRole={userRole} />}></Route>
          <Route path="/user" element={<User userRole={userRole} />}></Route>
          <Route path="/events" element={<Events userRole={userRole} />}></Route>
          <Route path="/event/:id" element={<Event userRole={userRole} />}></Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;

