import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./simple-menu.css";
import {
  faUserGroup,
  faGear,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="simple-menu">
      <Link to="/home">
        <FontAwesomeIcon icon={faUserGroup} className="item"/>
      </Link>
      <Link to="/chat">
        <FontAwesomeIcon icon={faComment} className="item"/>
      </Link>
      <Link to="/config">
        <FontAwesomeIcon icon={faGear} className="item" />
      </Link>
    </div>
  );
};

export default Menu;
