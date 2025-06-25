import React from "react";
import "./group.css";

const GroupCard = () => {
  return (
    <>
      <div className="group">
        <div className="img-group"></div>
        <div className="conteudo">
          <h3>JS DEVs</h3>
          <p>
            A group to answer questions about javascript and other related
            subjects.
          </p>
          <div className="member-topic">
            <p>👥 127 members</p>
            <p>💬 Topics: #JavaScript, #HTML, #CSS</p>
          </div>
          <button>See Group</button>
        </div>
      </div>
    </>
  );
};

export default GroupCard;
