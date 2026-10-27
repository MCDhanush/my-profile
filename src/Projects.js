import { ProjectList } from "./ProjectList";

const projects = [
  {
    image:
      "https://ik.imagekit.io/mim7hvkph/Screenshot__94_.png?updatedAt=1689587937349",
    name: "Syncora",
    details:
      "A MERN movie-focused application that lists films with summary, rating, trailer info, and CRUD-based management.",
    liveLink: "https://vercel.com/mcdhanushs-projects/syncora",
    repoLink: "https://github.com/MCDhanush/syncora",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "CRUD"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=1200&q=80",
    name: "Chennai Events",
    details:
      "A Chennai events app focused on showcasing and managing event information with REST-driven app workflows.",
    liveLink: "https://vercel.com/mcdhanushs-projects/chennai-events",
    repoLink: "https://github.com/MCDhanush/chennai_events",
    tags: ["React", "REST API", "CRUD"],
  },
  {
    image: "https://opengraph.githubassets.com/1/MCDhanush/pae",
    name: "PAE",
    details:
      "An interactive quiz platform for creating quizzes, publishing to a marketplace, and running real-time multiplayer games.",
    liveLink: "https://vercel.com/mcdhanushs-projects/pae",
    repoLink: "https://github.com/MCDhanush/pae",
    tags: ["React", "TypeScript", "Go", "MongoDB", "Realtime"],
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-shell">
        <div className="section-title-wrap">
          <h2>Projects</h2>
          <p>Selected work built with practical full-stack patterns.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectList key={project.name} proj={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
