import React from 'react';
import './css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="brand">Recipe World</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
