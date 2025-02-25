import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Cps/Home';
import Page1 from './Cps/Page1';
import User from './Cps/User';
import NotF from './Cps/Notfound';
import Event from './Components/Event';
import NavBar from './Components/NavigationBar';
import Events from './Components/Events';

import React, { Suspense, lazy } from "react";

function App() {
  const EventDetails = lazy(() => import("./Components/EventDetails"));
  
  return (
    <>
   

   
   <NavBar />

     
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/p1" element={<Page1 />} />
      <Route path="/event" element={<Event />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:eventName" element={<EventDetails />} />

      <Route path="/user/:username" element={<User />} />
      <Route path="*" element={<NotF />} />

    </Routes>

    </>

    
  )
}
// <div className="App">
//<Events />
//</div>
export default App
