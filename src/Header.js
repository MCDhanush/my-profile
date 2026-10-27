import { useEffect, useRef } from "react";
import Typical from "react-typical";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { gsap } from "gsap";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MCDhanush",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanush-mc-28598a202/",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "Email",
    href: "mailto:dhanushmc93@gmail.com",
    icon: <EmailIcon fontSize="small" />,
  },
];

export function Header() {
  const heroImageRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        { y: 0 },
        {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      gsap.fromTo(
        socialRefs.current,
        { y: 0, opacity: 0.65 },
        {
          y: -4,
          opacity: 1,
          duration: 0.9,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          stagger: 0.14,
        }
      );
    });

    return () => ctx.revert();
  }, []);

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
            <a
              className="btn btn-secondary"
              href="/assets/Dhanush_MC_Resume.pdf"
              download="Dhanush_MC_Resume.pdf"
            >
              Download Resume <DownloadIcon fontSize="small" />
            </a>
          </div>
          <ul className="social-list" aria-label="Social links">
            {socialLinks.map((link, index) => (
              <li key={link.label} ref={(element) => (socialRefs.current[index] = element)}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-image-wrap" aria-hidden="true" ref={heroImageRef}>
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
