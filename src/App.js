import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/Home/Home";
import Layout from "./components/Layout/Layout";
import User from "./components/pages/user/User";
import Events from "./components/pages/events/Events";
import Event from "./components/pages/event/Event";
import Profile from "./components/pages/myprofile/Profile";

import AuthContext from './components/shared/AuthContext';


function App() {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Login />;
  }

  return ( 
    <Layout>
      <Routes>
        <Route path="/login" element={<Home/>}></Route>
        <Route path="/me/:id" element={<Profile/>}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route
          path="/event/:id"
          element={<Event />}
        ></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
