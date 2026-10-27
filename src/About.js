import ApartmentIcon from "@mui/icons-material/Apartment";

const experienceCompanies = ["Uniphore", "Autonom8"];

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-shell two-column">
        <div className="card-surface">
          <h2>About</h2>
          <p>
            Hi, I&apos;m <strong>Dhanush MC</strong>, a full-stack developer focused
            on MERN applications and modern web experiences.
          </p>
          <p>
            I enjoy turning ideas into usable products, combining clean frontend
            interfaces with backend APIs and data-driven workflows.
          </p>
          <p>
            My profile includes experience across teams such as Uniphore and
            Autonom8, with a focus on building reliable web products.
          </p>
        </div>
        <div className="card-surface about-highlight">
          <h3>What I focus on</h3>
          <ul>
            <li>Building responsive, accessible React interfaces</li>
            <li>Designing REST APIs with Node.js and Express.js</li>
            <li>Creating CRUD-first applications with MongoDB</li>
            <li>Shipping polished UI with Bootstrap and Material UI</li>
          </ul>
          <h3 className="experience-heading">Experience</h3>
          <ul className="company-list">
            {experienceCompanies.map((company) => (
              <li key={company}>
                <ApartmentIcon fontSize="small" />
                <span>{company}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
