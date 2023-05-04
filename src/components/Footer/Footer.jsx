import React from "react";
import logo from "../../assets/Logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="little lemon" />
      <div>
        <h5>Doormat Navigation</h5>
        <nav>
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
      </div>
      <div>
        <h5>Contact</h5>
        <nav>
          <ul>
            <li>Adress</li>
            <li>Phone num</li>
            <li>littlelemon@email.com</li>
          </ul>
        </nav>
      </div>
      <div>
        <h5>Social Media Links</h5>
        <nav>
          <ul>
            <li>Adress</li>
            <li>Phone num</li>
            <li>littlelemon@email.com</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
