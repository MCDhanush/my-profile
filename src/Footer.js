import { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/MCDhanush",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "Email",
    href: "mailto:dhanushmc93@gmail.com",
    icon: <EmailIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanush-mc-28598a202/",
    icon: <LinkedInIcon fontSize="small" />,
  },
];

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:dhanushmc93@gmail.com?subject=${encodeURIComponent(
      "Portfolio Contact"
    )}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatus(
      "Your email client was opened with your message. Please send it from there to complete contact."
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  return (
    <footer className="section footer" id="contact">
      <div className="section-shell footer-grid">
        <div className="card-surface">
          <h2>Let&apos;s connect</h2>
          <p>
            Have a project idea or collaboration in mind? Reach out directly and
            I&apos;ll get back to you.
          </p>
          <ul className="contact-list">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href} target="_blank" rel="noreferrer">
                  {contact.icon}
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-secondary resume-btn"
            href="/assets/Dhanush_MC_Resume.pdf"
            download="Dhanush_MC_Resume.pdf"
          >
            Download Resume <DownloadIcon fontSize="small" />
          </a>
        </div>
        <div className="card-surface">
          <h3>Send a message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className="btn btn-primary" type="submit">
              Open Email Draft
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
}
