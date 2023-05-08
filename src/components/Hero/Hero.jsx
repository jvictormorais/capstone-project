import React from "react";
import heroImg from "../../assets/restauranfood.jpg";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <p>
          We are a family owned Mediterranean restaurant,
          <br />
          focused on traditional racipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="retaurn food" />
      </div>
    </div>
  );
};

export default Hero;
