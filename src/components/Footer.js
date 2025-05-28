import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">🍽️ RecipeWorld</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#recipes">Recipes</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>

      <div className="footer-middle">
        <p>Discover thousands of recipes from around the world. Learn to cook like a pro with step-by-step instructions and rich details.</p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RecipeWorld. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter/></a>
        </div>
      </div>
    </footer>
  );
}
