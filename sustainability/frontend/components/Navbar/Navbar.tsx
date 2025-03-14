import React from "react";
import "./Navbar.css";


export type NavAnchor = {
    name: string;
    ref: string;
}


export function Navbar({ Anchors }: { Anchors: NavAnchor[] }){
    return (
        <nav className="navbar">
            <ul className="nav-list">
                {Anchors.map((anchor, index) => (
                    <li key={index} className="nav-item">
                        <a href={anchor.ref} className="nav-link">
                            {anchor.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );

}