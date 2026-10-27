import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80";

export function ProjectList({ proj }) {
  const [imageSrc, setImageSrc] = useState(proj.image);

  return (
    <article className="project-card card-surface">
      <img
        className="project-image"
        src={imageSrc}
        alt={`${proj.name} project preview`}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
      />
      <div className="project-body">
        <h3>{proj.name}</h3>
        <p>{proj.details}</p>
        <ul className="chip-list chip-list-project">
          {proj.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className="btn btn-secondary project-link" href={proj.link} target="_blank" rel="noreferrer">
          Live Project <OpenInNewIcon fontSize="small" />
        </a>
      </div>
    </article>
  );
}
