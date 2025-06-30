import React from "react";
import "./Home.css";
import Header from "../../components/header/header";
import Menu from "../../components/simple-menu/simple-menu";
import Group_info from "../../components/group_info/group-info";
import People_card from "../../components/card-message/people-card";
import random from "../../assets/random-photo.png";
import Post_feed from "../../components/post-feed/post-feed";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Menu />
      <div className="feed">
        <Group_info />
        <div className="posts">
          <h2>Group Name</h2>
          <div className="say-input">
            <img src={random} alt="Random Photo" />
            <input type="text" placeholder="Say something...." />{" "}
            <button>Send</button>
          </div>
         <Post_feed />
         <Post_feed />
         <Post_feed />
         <Post_feed />
         <Post_feed />
         <Post_feed />
        </div>
        <div className="card-group-people">
          <h2>Group People</h2>
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

export default Home;
