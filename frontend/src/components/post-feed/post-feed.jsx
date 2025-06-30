import React from "react";
import "./post-feed.css";
import random from "../../assets/random-photo.png";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post_feed = () => {
  return (
    <>
      <hr className="hr-post" />
      <div className="post_content">
        <div className="post_identification">
          <img src={random} alt="" />
          <p>Lorem Ipsum</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
        <div className="post-interaction">
          <div className="like">
            <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: "1.5rem" }} />{" "}
            <p>100</p>
          </div>

          <div className="dislike">
            <FontAwesomeIcon
              icon={faThumbsDown}
              style={{ fontSize: "1.5rem" }}
            />
            <p>12</p>
          </div>
          <div className="share">
            <FontAwesomeIcon icon={faShare} style={{ fontSize: "1.5rem" }} />
            <p>Share</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post_feed;
