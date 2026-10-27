import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { About } from "./About";
import { Stickers } from "./Stickers";
import { Projects } from "./Projects";
import { Footer } from "./Footer";



const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="app-shell">
      <header className="site-nav-wrap">
        <nav className="site-nav" aria-label="Primary">
          <a className="brand" href="#home" aria-label="Go to home section">
            <span className="brand-mark" aria-hidden="true">
              DM
            </span>
            <span className="brand-text">Dhanush MC</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="site-menu" className={`menu-list ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Header />
        <About />
        <Stickers />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
