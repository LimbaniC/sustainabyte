import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/unnamed.png" alt="SUSTAIN-A-BITE Logo" className="logo" />
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-icon md:hidden">
        ☰
      </button>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li className="nav-item"><Link to="/saved">Saved</Link></li>
          <li className="nav-item"><Link to="/donate">Donate</Link></li>
          <li className="nav-item"><Link to="/search">Search</Link></li>
          <li className="nav-item login">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
