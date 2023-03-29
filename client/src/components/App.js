import './App.css';
import React, { useEffect, useState } from "react";
import  Signup  from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import NavBar  from "./Navbar";
import Listings from './Listings';

function App() {
const [user, setUser]=useState(null)

function handleUser(newUser) {
  setUser(newUser)
}
  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/login" element={<Login handleUser={handleUser}/>} />
            <Route path="/join-realtor.com" element={<Signup handleUser={handleUser}/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
