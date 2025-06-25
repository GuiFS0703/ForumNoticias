import React from "react";
import "./notice.css"
const NoticeCard = () => {
  return (
    <>
      <div className="one-notice">
        <div className="data-nome">
          <p>📅 [07/02/2025]</p> <p id="title">📰 New feature launched!</p>
        </div>
        <p>A new private groups option has been launched for NexusForum.</p>
        <button>Read More</button>
        <hr />
      </div>
    </>
  );
};

export default NoticeCard;
