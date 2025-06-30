import React from "react";
import "./people-card.css";
import random from "../../assets/random-photo.png";

const People_card = () => {
  return (
    <>
      <hr className="hr-people-card" />
      <div className="people-card">
        <img src={random} alt="Random image for random person!" />
        <div className="name-message">
          <h3>Lorem Ipsum</h3>
          <p>Lorem Ipsum is simply dummy text...</p>
        </div>
      </div>
    </>
  );
};
export default People_card;
