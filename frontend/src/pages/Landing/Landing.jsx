import { React, useRef } from "react";
import "./Landing.css";
import logo from "../../assets/whiteNexusForum.png";
import GroupCard from "../../components/group/group";
import NoticeCard from "../../components/notice/notice";
import PostUser from "../../components/postUser/postUser";
import brain from "../../assets/brain.png";
import people from "../../assets/people.png";
import rocket from "../../assets/rocket.png";
import { Link } from "react-router-dom";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  const menu = useRef(null); //pode ser const por const permitir objetos e arrays de ter uma mudança em alguma propriedade dela, mas não o todo da estrutura.

  function AbrirMenu() {
    if (menu.current) {
      console.log(menu.current);
      menu.current.classList.add("ativo");
    } else {
      console.log("Elemento não encontrado!");
    }
  }

  function fecharMenu() {
    if (menu.current) {
      menu.current.classList.remove('ativo');
    } else {
      console.log("O menu não foi obtido!");
    }
  }

  return (
    <div id="landing-div">
      <header id="menu-desktop">
        <img src={logo} alt="Logo branca da empresa!" />
        <nav>
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
            <li>
              <a href="#notices">Notices</a>
            </li>
            <li>
              <a href="#groups">Groups</a>
            </li>
            <li>
              <a href="#search">Search</a>
            </li>
            <li>
              <a href="#argument">Why</a>
            </li>
          </ul>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </nav>
      </header>

      <FontAwesomeIcon
        id="botao-menu-mobile"
        icon={faBars}
        onClick={AbrirMenu}
      />
      <header id="menu-mobile" ref={menu}>
        <FontAwesomeIcon
          icon={faX}
          id="sair-menu-mobile"
          onClick={fecharMenu}
        />
            <nav>
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
            <li>
              <a href="#notices">Notices</a>
            </li>
            <li>
              <a href="#groups">Groups</a>
            </li>
            <li>
              <a href="#search">Search</a>
            </li>
            <li>
              <a href="#argument">Why</a>
            </li>
          </ul>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </nav>
      </header>

      <main id="landing">
        <section id="banner">
          <h1>
            Connect. <br /> Discuss. <br /> Share.
          </h1>
          <button>Participate</button>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>
            <b>
              Welcome to NexusForum – your space for trading ideas and real
              connections.{" "}
            </b>
            Built with modern technologies, our platform offers an intuitive
            design and an active community, where every discussion contributes
            to collective growth. Here, you’ll find a secure and dynamic
            environment — whether in dark mode or light — designed to adapt to
            your style
          </p>
        </section>
        <section id="posts">
          <h2>💬Featured Posts</h2>
          <div className="cards-posts">
            <PostUser />
            <PostUser />
            <PostUser />
          </div>
        </section>
        <section id="notices">
          <h2>📢 Forum Notices</h2>
          <div className="cards-notice">
            <NoticeCard />
            <NoticeCard />
            <NoticeCard />
            <NoticeCard />
          </div>
        </section>
        <section id="groups">
          <h2>👥 Featured groups</h2>
          <div className="cards-group">
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </div>
        </section>
        <section id="search">
          <h2>🔍Quick Search</h2>
          <div className="input-buscar">
            <input type="text" placeholder="Search for anything" />{" "}
            <button>Find</button>
          </div>
        </section>
        <section id="argument">
          <h2>💡Why participate?</h2>
          <p>In our community, We have many benefits. Among them: </p>
          <div className="argument-cards">
            <div className="ex-argument">
              <img src={people} alt="People" />
              <p>Nine hundred active members this week</p>
            </div>
            <div className="ex-argument">
              <img src={brain} alt="brain" />
              <p>3500 posts created this month alone</p>
            </div>
            <div className="ex-argument">
              <img src={rocket} alt="rocket" />
              <p>Answers in an average time of less than thirty minutes </p>
            </div>
          </div>
        </section>
        <footer id="desktop-footer">
          <div className="superior-footer">
            <div className="slogan-button">
              <b>Connect. Discuss. Share</b>
              <div className="buttons">
                <button>Contact Us</button>
                <button>Send Message</button>
              </div>
            </div>
            <div className="links">
              <ul>
                <li className="title">About</li>
                <li>About Us</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
              <ul>
                <li className="title">Community</li>
                <li>Popular Topics</li>
                <li>Groups & Categories</li>
                <li>Community GuideLines</li>
                <li>Help /Support</li>
              </ul>
            </div>
          </div>
          <div className="inferior-footer">
            <div className="terms-service">
              <p>© 2025 NexusForum. All rights reserved.</p>
              <p>Privacy Policy | terms & Conditions</p>
            </div>
            <p>NEXUS FORUM</p>
          </div>
        </footer>

        <footer id="mobile-footer">
          <div className="social-media">
            <FontAwesomeIcon icon={faInstagram} className="ico" />
            <FontAwesomeIcon icon={faTwitter} className="ico" />
            <FontAwesomeIcon icon={faDiscord} className="ico" />
            <FontAwesomeIcon icon={faFacebook} className="ico" />
          </div>
          <div className="mobile-links">
            <p>About Us</p>
            <p>Send Message</p>
            <p>Support</p>
          </div>
          <p>© 2025 NexusForum. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
