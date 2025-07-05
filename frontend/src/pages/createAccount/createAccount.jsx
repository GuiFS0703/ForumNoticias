import React from "react";
import "./createAccount.css";
import logo from "../../assets/whiteNexusForum.png";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="bodyzinho">
      <div className="card-create">
        <div className="left-side">
          <div className="left-header">
            <img src={logo} alt="" />
          </div>
          <h2>Hi! Welcome!</h2>
           <input type="text" placeholder="Enter your name: "/>
          <input type="text" placeholder="Enter your email"/>
          <input type="text" placeholder="Enter your password"/>
          <input type="text" placeholder="Confirm your password" />
          <button>Create</button>
          <p>Do you have account? click <Link to="/login" style={{color: "#58a6ff", fontWeight: "bolder"}}>Here</Link></p>
        </div>
        <div className="right-side">
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
