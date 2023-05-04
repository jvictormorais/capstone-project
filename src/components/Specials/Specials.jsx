import React from "react";
import "./specials.css";
import greekSaladImg from "../../assets/greeksalad.jpg";
import bruchettaImg from "../../assets/bruchetta.svg";
import lemonDessertImg from "../../assets/lemondessert.jpg";

const Specials = () => {
  return (
    <div className="special">
      <div className="specials-top">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials-bottom">
        <div className="card">
          <div className="card-img">
            <img src={greekSaladImg} alt="Greek Salad" />
          </div>
          <div className="dish-name-price">
            <h3>Greek Salad</h3>
            <h5>$12.99</h5>
          </div>
          <p>
            The famous greek salad of crisp lettuce, peppers, olives and our
            Chicaco style feta cheese, ganished with crunchy garlic and rosemary
            croutons.
          </p>
          <h4>Order a delivery</h4>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={bruchettaImg} alt="Bruchetta" />
          </div>
          <div className="dish-name-price">
            <h3>Greek Salad</h3>
            <h5>$5.99</h5>
          </div>
          <p>
            The famous greek salad of crisp lettuce, peppers, olives and our
            Chicaco style feta cheese, ganished with crunchy garlic and rosemary
            croutons.
          </p>
          <h4>Order a delivery</h4>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={lemonDessertImg} alt="Lemon Dessert" />
          </div>
          <div className="dish-name-price">
            <h3>Greek Salad</h3>
            <h5>$12.99</h5>
          </div>
          <p>
            The famous greek salad of crisp lettuce, peppers, olives and our
            Chicaco style feta cheese, ganished with crunchy garlic and rosemary
            croutons.
          </p>
          <h4>Order a delivery</h4>
        </div>
      </div>
    </div>
  );
};

export default Specials;
