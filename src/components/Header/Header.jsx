import React from "react";
import logo from "../../assets/Logo.svg";
import hamburgerMenu from "../../assets/hamburgermenu.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="little lemon" />
      <nav>
        <img className="hamburger" src={hamburgerMenu} alt="Hamburguer Menu" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
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
