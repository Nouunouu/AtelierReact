import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Cps/Home';
import Page1 from './Cps/Page1';
import User from './Cps/User';
import NotF from './Cps/Notfound';
import Events from './Components/Events';
import Event from './Components/Event';

function App() {

  return (
    <>
   
    
   
      <h1>Atelier React</h1>
      <div>
      <h1>Upcoming Events</h1>
    </div>
     
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/p1" element={<Page1 />} />
      <Route path="/event" element={<Event />} />
      <Route path="/events" element={<Events />} />

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
