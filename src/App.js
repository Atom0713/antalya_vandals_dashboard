import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/pages/login/Login";
import Home from './components/pages/home/Home';
import { useToken } from './components/auth';
import Layout from './components/Layout/Layout'
import User from './components/pages/user/User';
import Event from './components/pages/events/Event'


function App(){
  const { token, setToken } = useToken();

  if(!token) {
    return (
        <Login setToken={setToken} />
    )
  }

  return (
    <div className="wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/events" element={<Event />}></Route>
        </Routes>
      </Layout>
    </div>
  )

}

export default App;

