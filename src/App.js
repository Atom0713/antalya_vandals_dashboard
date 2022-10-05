import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/Home/Home";
import Layout from "./components/Layout/Layout";
import User from "./components/pages/user/User";
import Events from "./components/pages/events/Events";
import Event from "./components/pages/event/Event";

import AuthContext from './components/shared/AuthContext';


function App() {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Login />;
  }

  return ( 
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route
          path="/events"
          element={<Events/>}
        ></Route>
        <Route
          path="/event/:id"
          element={<Event />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
