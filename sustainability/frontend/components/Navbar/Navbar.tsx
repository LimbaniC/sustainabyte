import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export type NavAnchor = {
  name: string;
  ref: string;
};

export function Navbar({ Anchors }: { Anchors: NavAnchor[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ Clickable Logo */}
      <Link to="/" className="navbar-brand">
        <img src="/unnamed.png" alt="SUSTAIN-A-BITE Logo" className="logo" />
      </Link>

      {/* ✅ Hamburger Menu Toggle (Only for Mobile) */}
      <button onClick={() => setIsOpen(!isOpen)} className="menu-icon md:hidden">
        ☰
      </button>

      {/* ✅ Navigation Menu (Now Dynamic) */}
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          {Anchors.map((anchor, index) => (
            <li key={index} className="nav-item">
              <Link to={anchor.ref}>{anchor.name}</Link>
            </li>
          ))}
          {/* ✅ Static Login Link */}
          <li className="nav-item login">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
