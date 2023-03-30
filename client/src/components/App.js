import './App.css';
import React, { useEffect, useState } from "react";
import  Signup  from "./Signup";
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import NavBar  from "./Navbar";
import HomePage from './HomePage';
import AddListing from './AddListing';
import MyProperties from './MyProperties';

function App() {
const [user, setUser]=useState(null)
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, []);

useEffect(() => {
  if (user) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, [user]);

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} isLoggedIn={isLoggedIn}/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login onLogin={setUser}/>} />
            <Route path="/join-realtor.com" element={<Signup onLogin={setUser}/>} />
            <Route path="/my-properties" element={<MyProperties user={user}/>} />
            <Route path="/add-property"  element={<AddListing user={user}/>}/>
          </Routes>
    </div>
  );
}

export default App;
