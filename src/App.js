import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import  {Login, Home, User, Event, Events, Profile, ProtectedRoute, DepthChart } from "./components/";

export default function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" 
            element={
                  <Home/>
            }></Route>
        <Route path="/me/:id" element={<Profile/>}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route
            path="/event/:id"
            element={<Event />}
        ></Route>
        <Route path="/depth_chart" element={<DepthChart/>}></Route>
        <Route path="*"></Route>
      </Route>
    </Routes>
  );
}
