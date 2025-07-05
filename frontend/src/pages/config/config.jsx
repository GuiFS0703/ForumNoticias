import React from "react";
import "./config.css";
import Header from "../../components/header/header";
import Menu from "../../components/simple-menu/simple-menu";
import photo from "../../assets/random-photo.png";

const Config = () => {
  return (
    <div className="config">
      <Header />
      <Menu />
      <div className="session-config">
        <h2>Settings</h2>
        <hr />
        <div className="profile">
          <h3>Profile</h3>
          <div className="image-config">
            <img src={photo} alt="Random Photo" />
            <div className="buttons-photo">
              <button id="change">Change Picture</button>
              <button id="remove">Remove Picture</button>
            </div>
          </div>
        </div>
        <div className="profile">
          <h3>Profile name</h3>
          <input type="text" />
        </div>
        <div className="username">
          <h3>Username</h3>
          <input type="text" />
        </div>
        <div className="theme">
          <h3>Color Theme</h3>
          <select>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
        </div>
        <div className="about">
          <h3>About Me</h3>
          <textarea></textarea>
        </div>
        <hr />
        <div className="buttons">
          <button id="delete-button">Delete Account</button>
          <button id="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Config;
