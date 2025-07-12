import React from "react";
import "./chat.css";
import Header from "../../components/header/header";
import Menu from "../../components/simple-menu/simple-menu";
import People_card from "../../components/card-message/people-card";
import archive from "../../assets/clips.png";
import send from "../../assets/send.png";
import { Link } from "react-router-dom";
const Chat = () => {
  return (
    <div className="chat">
      <Header/>
      <Menu/>
      <hr id="separador"/>
      <div className="main-chat">
        <div className="friends-session">
          <input type="text" placeholder="Find your friends...." />
          <hr id="separador" />
          <People_card />
          <People_card />
          <People_card />
          <People_card />
          <People_card />
        </div>
        <div className="chat-session">
          <div className="content-chat"></div>
          <hr style={{width: "100%"}} />
          <div className="input-chat">
            <img src={archive} alt="Ícone de arquivo" />
            <input type="text" placeholder="Write anything...." />
            <img src={send} alt="Ícone de enviar mensagem" />
          </div>
        </div>

        <div className="mobile-cards">
          <People_card />
          <People_card />
          <People_card />
          <People_card />
          <People_card />
          <People_card />
          <People_card />
        </div>
      </div>
    </div>
  );
};

export default Chat;
