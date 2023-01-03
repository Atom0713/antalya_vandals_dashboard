import React from "react";

import { Routes, Route } from "react-router-dom";
import  {Login, Home, User, Event, Events, Profile } from "./components/";

export const ROUTES =
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/me/:id" element={<Profile/>}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route
            path="/event/:id"
            element={<Event />}
        ></Route>
    </Routes>
