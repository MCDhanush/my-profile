const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD Development"],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub"],
  },
];

export function Stickers() {
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <div className="section-title-wrap">
          <h2>Skills</h2>
          <p>Core technologies I use to plan, build, and ship full-stack apps.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="card-surface skill-card">
              <h3>{group.title}</h3>
              <ul className="chip-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
