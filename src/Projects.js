import { ProjectList } from "./ProjectList";

const projects = [
  {
    image:
      "https://ik.imagekit.io/mim7hvkph/Screenshot__94_.png?updatedAt=1689587937349",
    name: "Movie App",
    details:
      "A MERN application that lists movies with details like name, summary, rating, and trailer info, plus edit and delete options.",
    link: "https://cosmic-frangipane-568756.netlify.app/movies",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "CRUD"],
  },
  {
    image:
      "https://ik.imagekit.io/mim7hvkph/Screenshot__93_.png?updatedAt=1689587937133",
    name: "Admin Management",
    details:
      "A school records app where an admin team can manage teachers and students with complete CRUD functionality.",
    link: "https://effortless-dragon-bd0989.netlify.app/",
    tags: ["React", "REST API", "CRUD"],
  },
  {
    image:
      "https://ik.imagekit.io/mim7hvkph/Screenshot__92_.png?updatedAt=1689587937130",
    name: "Classic-Furn",
    details:
      "A furniture purchasing MERN project with customer login and signup entry points and full CRUD capabilities.",
    link: "https://app.netlify.com/sites/bejewelled-kleicha-1e552d/overview",
    tags: ["MERN", "Authentication", "CRUD"],
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
