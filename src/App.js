import "./App.css";
// import Button from "@mui/material/Button";
import { useState } from "react";
import { Header } from "./Header";
import { Stickers } from "./Stickers";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import EmailIcon from "@mui/icons-material/Email";
import { About } from "./About";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
// import ListIcon from "@mui/icons-material/List";
// import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [navopen, setNavopen] = useState("");
  // const [navclose, setClose] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <div className="nav-bac">
        <nav>
          <img
            className="title sign-img"
            src="https://see.fontimg.com/api/renderfont4/z8xjG/eyJyIjoiZnMiLCJoIjoxNzUsInciOjEyNTAsImZzIjoxNDAsImZnYyI6IiM4MTI4MjAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RGhhbnVzaA/darlington-demo.png"
            alt="skill-img"
          />
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a className="nav-font" href="#h" to="/about">
                Home
              </a>
            </li>
            <li>
              <a to="/services" href="#a">
                About
              </a>
            </li>
            <li>
              <a href="#s" to="/contact">
                Skills
              </a>
            </li>
            <li>
              <a href="#p" to="/contact">
                Projects
              </a>
            </li>
            <li>
              <a href="#f" to="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Header />
        <About />
        <Stickers />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
