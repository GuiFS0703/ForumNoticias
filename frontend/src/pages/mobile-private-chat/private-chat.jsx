import React from "react";
import "./private-chat.css";
import archive from "../../assets/clips.png";
import send from "../../assets/send.png";
import back from "../../assets/back.png";
import more from "../../assets/more.png";
import { Link } from "react-router-dom";
const Private_chat = () => {
  return (
    <div className="private-chat">
      <div className="private-chat-header">
        <div className="header-content">
          <Link to="/chat"><img src={back} alt="Icon Back" /></Link>
          <h3>Lorem Ipsum</h3>
          <img src={more} alt="Icon Back" />
        </div>
        <hr />
      </div>

      <div className="send-message">
        <hr />
        <div className="send-content">
          <label htmlFor="file"><img src={archive} alt="Icon Archive" /></label>
          <input type="file" id="file" />
          <input type="text" id="text-input"/>
          <img src={send} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Private_chat;
