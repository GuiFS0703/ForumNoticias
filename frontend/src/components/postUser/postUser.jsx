import React from "react";
import "./postUser.css";
import random from "../../assets/random-photo.png";

const PostUser = () => {
  return (
    <>
      <div className="post">
        <div className="nome-foto">
          <img src={random} alt="Foto aleatória" />
          <p>Joao da Silva</p>
        </div>
        <hr />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since......
        </p>
        <hr />
        <div className="hashtags">
          <p>#Joao</p>
          <p>#Lorem</p>
          <p>#Ipsum</p>
        </div>
      </div>
    </>
  );
};

export default PostUser;
