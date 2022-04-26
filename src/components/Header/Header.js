import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="nav-container navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="container collapse navbar-collapse"          id="navbarText">
            <ul class="header-link navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/home">Home</Link>
              </li>

              <li class="nav-item">
                <Link to="/donation">Donation</Link>
              </li>

              <li class="nav-item">
                <Link to="/events">Events</Link>
              </li>
              <li class="nav-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li class=" nav-item">
                <Link to="/login">Login</Link>
              </li>
              <li class="register nav-item">
                <Link className="register-link"  to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
