//import React from "react";
import React, {useEffect } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import M from "materialize-css/dist/js/materialize.min.js"

const NavBar = ({ user, handleLogout }) => {
  
  useEffect(() => {
    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {edge:'right'});
  }, []);

  return (
    <>
      {user ? (
        <div className="navbar-fixed">
        <nav>
          <div id="NavBarDiv" className="nav-wrapper teal lighten-2" >
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul id="NavBarList" className="right hide-on-med-and-down davidsNavBar">

            <li id="mySchedule">
              <a className="active" href="/mySchedule">My Schedule</a>
            </li>
            <li id="flightCrew">
              <a className="active" href="flightCrew">Flight Crew</a>
            </li>
            <li id="passengers">
              <a className="active" href="/passengers">Passengers</a>
            </li>
            <li id="chat">
              <a className="active" href="/chat">Chat</a>
            </li>
            <li id="logOut" className="right">
              <a className="active" href=" " onClick={handleLogout}>logOut</a>
            </li>
            </ul>
          </div>

        <ul className="sidenav" id="mobile-demo">
         <li id="mySchedule">
              <a className="active" href="/mySchedule">My Schedule</a>
            </li>
            <li id="flightCrew">
              <a className="active" href="/flightCrew">Flight Crew</a>
            </li>
            <li id="passengers">
              <a className="active" href="/passengers">Passengersy</a>
            </li>
            <li id="chat">
              <a className="active" href="/chat">Chat</a>
            </li>
            <li id="logOut">
              <a className="active" href=" " onClick={handleLogout}>logOut</a></li>
        </ul>
        </nav>
        </div>
      ) : (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <ul id="nav-mobile" className="right">
                <li>
                  <Link to="/login" className="nav-link">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      )}
    </>
  );
};

export default NavBar;