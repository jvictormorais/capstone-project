import React from "react";
import logo from "../../assets/Logo.svg";
import hamburgerMenu from "../../assets/hamburgermenu.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="little lemon" />
      <nav>
        <img className="hamburger" src={hamburgerMenu} alt="Hamburguer Menu" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
