import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar/Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav>
      <div className="nav-title"><h1>William Shaner</h1></div>
      <div className="nav-menu">
        <NavLink className="text-dark" to="/">
          Home
        </NavLink>
        <NavLink className="text-dark" to="/projects">
          Projects
        </NavLink>
        <NavLink className="text-dark" to="/contact">
          Contact
        </NavLink>
      </div>
      <BiMenuAltRight aria-controls="nav-dropdown" className="dropdown-toggle" aria-expanded={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)} />
      <div className={`nav-dropdown ${dropdownOpen ? 'show' : 'close'}`}>
        <NavLink className="text-dark" to="/">
          Home
        </NavLink>
        <NavLink className="text-dark" to="/projects">
          Projects
        </NavLink>
        <NavLink className="text-dark" to="/contact">
          Contact
        </NavLink>
      </div>
      {' '}

    </nav>
  );
}

export default Navbar;
