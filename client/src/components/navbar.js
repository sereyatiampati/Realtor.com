import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar(){
  return (<>
  <nav class="navbar navbar-expand-lg navbar-light static-top" >
  <div class="container">
    <a class="navbar-brand" href="#">
    <span className="start-logo">Realtor.</span><span className="end-logo">com</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <NavLink to="/login" activeClassName="active"> Login </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/join-realtor.com" activeClassName="active"> Signup </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 
</>
  );
};
export default Navbar;