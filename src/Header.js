import Typical from "react-typical";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/MCDhanush" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanush-mc-28598a202/",
  },
  { label: "Email", href: "mailto:dhanushmc93@gmail.com" },
];

export function Header() {
  return (
    <section className="hero" id="home">
      <div className="section-shell hero-shell">
        <div className="hero-content card-surface">
          <p className="eyebrow">Full Stack Developer</p>
          <h1>Dhanush MC</h1>
          <p className="hero-role" aria-label="Rotating role highlights">
            <Typical
              steps={[
                "MERN Stack Developer",
                2200,
                "React and Node.js Builder",
                2200,
                "REST and CRUD App Creator",
                2200,
              ]}
              wrapper="span"
              loop={Infinity}
            />
          </p>
          <p className="hero-copy">
            I build practical, user-focused web applications with clean interfaces
            and scalable full-stack architecture.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:dhanushmc93@gmail.com">
              Contact Me
            </a>
            <a className="btn btn-secondary" href="#projects">
              View Projects
            </a>
          </div>
          <ul className="social-list" aria-label="Social links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-image-wrap" aria-hidden="true">
          <div className="hero-image-ring" />
          <img
            className="hero-image"
            src="https://ik.imagekit.io/mim7hvkph/result.png?updatedAt=1688238917695"
            alt="Portrait of Dhanush MC"
          />
        </div>
      </div>
    </section>
  );
}
