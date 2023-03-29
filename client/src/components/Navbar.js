import React, { useState, useEffect } from "react";
import {NavDropdown} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar({user, setUser}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(user !== null);
  }, [user]);

  return (<>
  <nav class="navbar navbar-expand-lg navbar-light static-top" >
  <div class="container">
    <a class="navbar-brand text-brand" href="#"> <span style={{color: "#4A60A1"}}>Realtor</span><span style={{fontWeight: "300", fontSize: "1.3rem"}}>.com</span>
    {/* <img src="https://www.apartments.com/a/4d9af0/content/images/apartments-for-rent-logo.png" alt="..." height="36"/> */}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {
        isLoggedIn ?(
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <NavLink to="/" activeClassName="active"> HOME </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/my-properties" activeClassName="active"> MY PROPERTIES</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/add-property" activeClassName="active"> ADD LISTING </NavLink>
        </li>
        <li >
        <NavDropdown title={user.username}>
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
        </li>
      </ul>
        ) : (
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
          <NavLink to="/" activeClassName="active"> HOME </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/login" activeClassName="active"> LOGIN </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/join-realtor.com" activeClassName="active"> SIGNUP </NavLink>
          </li>
        </ul>
        )
      }
      
    </div>
  </div>
</nav> 
</>
  );
};
export default NavBar;