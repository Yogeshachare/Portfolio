import "./Projects.css";
import { projects } from "../../data";
import Project from "../Project/Project";

const Projects = () => {
  return (
    <div className="portfolio__projects section__padding" id="projects">
      <div className="portfolio__projects-main">
        <div className="portfolio__projects-heading">
          <p>portfolio</p>
          <h2>Each project is a unique piece of development 🧩</h2>
        </div>
        {projects.map((project, i) => (
          <Project key={`${project.name} + ${i}`} data={project} id={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
