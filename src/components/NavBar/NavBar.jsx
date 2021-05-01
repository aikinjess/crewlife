import React, {useContext} from 'react';
import './NavBar.css'

import { Link } from "react-router-dom";
import { UserContext } from '../../components/UserContext'

const NavBar = ({ handleLogout }) => {
  const user = useContext(UserContext);

  return (
    <nav>
      <ul>
       
        <li><Link to="/trip">My Trips</Link></li>
        <li><Link to="/trip/new">New Trip</Link></li>
      </ul>
      {user ?
        <ul className="nav-login">
          <li><Link to="" onClick={handleLogout}>Logout</Link></li>
        </ul>
      :
        <ul className="nav-login">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar;