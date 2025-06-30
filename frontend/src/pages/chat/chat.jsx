import React from "react";
import "./chat.css";
import Header from "../../components/header/header";
import Menu from "../../components/simple-menu/simple-menu";
import People_card from "../../components/card-message/people-card";
import random from "../../assets/random-photo.png";
import archive from "../../assets/archive-image.png";
import send from "../../assets/send-image.png";

const Chat = () => {
  return (
    <div className="chat">
      <Header />
      <Menu />
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
          <div className="header-chat-session">
            <div className="person-profile">
              <img src={random} alt="" />
              <div className="name-activity">
                <h3>Lorem Ipsum</h3>
                <p>Online 30 minutos ago</p>
              </div>
            </div>
          </div>
          <div className="content-chat"></div>
          <hr style={{width: "100%"}} />
          <div className="input-chat">
            <img src={archive} alt="Ícone de arquivo" />
            <input type="text" placeholder="Write anything...." />
            <img src={send} alt="Ícone de enviar mensagem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
