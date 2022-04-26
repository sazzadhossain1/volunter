import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

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
             
              <li class="register nav-item">
                <Link className="register-link"  to="/register">Register</Link>
              </li>

              <li class=" nav-item">
                {
                  user ?
                  <Link to='/login' onClick={handleSignOut}>Sign Out</Link>
                  :
                  <Link to="/login">Login</Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
