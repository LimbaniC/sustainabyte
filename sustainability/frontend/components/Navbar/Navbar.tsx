import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export type NavAnchor = {
  name: string;
  ref: string;
};

export function Navbar({ Anchors }: { Anchors: NavAnchor[] }) {
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation();
  const isHome = location.pathname === "/";
  const hideMenu = location.pathname === "/login" || location.pathname === "/signup";

  const homeAnchors: NavAnchor[] = [
    { name: "About", ref: "#about" },
    { name: "Meet the Team", ref: "#team" },
    { name: "Contact", ref: "#contact" }
  ];

  const handleSignOut = () => {
    console.log("Signed out");
    window.location.href = "/"; 
  }; 

  const activeAnchors = isHome ? homeAnchors : Anchors;


  return (
    <nav className="navbar">
      
      <Link to="#hero" className="navbar-brand">
        <img src="/unnamed.png" alt="SUSTAIN-A-BITE Logo" className="logo" />
      </Link>

      {!hideMenu && (
        <>
          <button onClick={() => setIsOpen(!isOpen)} className="menu-icon md:hidden">
            ☰
          </button>

          <div className={`menu ${isOpen ? "active" : ""}`}>
            <ul>
              {activeAnchors.map((anchor, index) => (
                <li key={index} className="nav-item">
                  {anchor.ref.startsWith("#") ? (
                    <a href={anchor.ref}>{anchor.name}</a>
                  ) : (
                    <Link to={anchor.ref}>{anchor.name}</Link>
                  )}
                </li>
              ))}
              <li className="nav-item">
                {isHome ? (
                  <Link to="/login">
                    <button className="nav-button">Login</button>
                  </Link>
                ) : (
                  <button onClick={handleSignOut} className="nav-button">Sign Out</button>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}