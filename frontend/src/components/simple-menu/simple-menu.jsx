import { React, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./simple-menu.css";
import {
  faUserGroup,
  faGear,
  faComment,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/whiteNexusForum.png";

const Menu = () => {
  const mobile_open_menu = useRef(null);
  function OpenMenu() {
    mobile_open_menu.current.classList.add('abrir');
  }

  function closeMenu() {
    mobile_open_menu.current.classList.remove('abrir')
  }
  return (
    <>
      <div className="simple-menu">
        <Link to="/home">
          <FontAwesomeIcon icon={faUserGroup} className="item" />
        </Link>
        <Link to="/chat">
          <FontAwesomeIcon icon={faComment} className="item" />
        </Link>
        <Link to="/settings">
          <FontAwesomeIcon icon={faGear} className="item" />
        </Link>
      </div>

      <div className="mobile-chat-header">
        <img src={logo} alt="" />
        <input type="text" />
        <FontAwesomeIcon
          icon={faBars}
          id="mobile-menu-icon"
          onClick={OpenMenu}
        />
      </div>
      <div className="conteudo-menu" ref={mobile_open_menu}>
        <FontAwesomeIcon icon={faX} onClick={closeMenu} id="close-menu" />
        <nav>
          <ul>
            <Link to="/home" className="item-conteudo-menu" >
              <li>Home</li>
            </Link>
            <Link to="/settings" className="item-conteudo-menu" >
              <li>Settings</li>
            </Link>
             <Link to="/chat" className="item-conteudo-menu" >
              <li>Chats</li>
            </Link>
          </ul>
          <button>Logout</button>
        </nav>
      </div>
    </>
  );
};

export default Menu;
