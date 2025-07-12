import React from "react";
import "./people-card.css";
import random from "../../assets/random-photo.png";
import { Link } from "react-router-dom";
const People_card = () => {
  return (
    <div className="one-person-card">
      <Link to="/private-chat">
        <div className="person-card">
          <img src={random} alt="Random image for random person!" />
          <div className="name-message">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text...</p>
          </div>
        </div>
           <hr className="hr-person-card" />
      </Link>
    </div>
  );
};
export default People_card;
