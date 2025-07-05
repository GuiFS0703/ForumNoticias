import React from "react";
import logo from "../../assets/whiteNexusForum.png";
import "./login.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="body">
      <div className="card-login">
        <div className="lado-esquerdo">
          <div className="cabecalho-esquerdo">
            <img src={logo} alt="Logo NexusForum" />
          </div>
          <h2>Welcome Back!</h2>
          <input type="text" placeholder="Enter your name: " />
          <input type="text" placeholder="Enter your password" />
          <button>Login</button>
          <div className="warnings">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>
              Do you haven't account? Click{" "}
              <Link
                to="/createAccount"
                style={{ color: "#58a6ff", fontWeight: "bolder" }}
              >
                Here
              </Link>
            </p>
          </div>
        </div>
        <div className="lado-direito"></div>
      </div>
    </div>
  );
};

export default LoginPage;
