import React from "react";
import "./header.css";
import logo from "../../assets/whiteNexusForum.png";
import genericPerson from "../../assets/random-photo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" id="logo"/>
      <img src={genericPerson} alt="Generic photo" id="photo"/>
    </div>
  );
};

export default Header;