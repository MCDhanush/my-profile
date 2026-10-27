import ApiIcon from "@mui/icons-material/Api";
import CssIcon from "@mui/icons-material/Css";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DnsIcon from "@mui/icons-material/Dns";
import GitHubIcon from "@mui/icons-material/GitHub";
import GridViewIcon from "@mui/icons-material/GridView";
import HtmlIcon from "@mui/icons-material/Html";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import JavascriptIcon from "@mui/icons-material/Javascript";
import StorageIcon from "@mui/icons-material/Storage";
import SourceIcon from "@mui/icons-material/Source";
import TerminalIcon from "@mui/icons-material/Terminal";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <JavascriptIcon fontSize="small" /> },
      { name: "React", icon: <ViewQuiltIcon fontSize="small" /> },
      { name: "HTML", icon: <HtmlIcon fontSize="small" /> },
      { name: "CSS", icon: <CssIcon fontSize="small" /> },
      { name: "Bootstrap", icon: <GridViewIcon fontSize="small" /> },
      { name: "Material UI", icon: <DataObjectIcon fontSize="small" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <DnsIcon fontSize="small" /> },
      { name: "Express.js", icon: <TerminalIcon fontSize="small" /> },
      { name: "MongoDB", icon: <StorageIcon fontSize="small" /> },
      { name: "REST APIs", icon: <ApiIcon fontSize="small" /> },
      {
        name: "CRUD Development",
        icon: <IntegrationInstructionsIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "Workflow",
    skills: [
      { name: "Git", icon: <SourceIcon fontSize="small" /> },
      { name: "GitHub", icon: <GitHubIcon fontSize="small" /> },
    ],
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
                  <li key={skill.name}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
