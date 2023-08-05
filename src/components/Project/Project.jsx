import "./Project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ data, id }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? "portfolio__projects-project"
          : "portfolio__projects-project-reverse"
      }
    >
      <div className="portfolio__projects-project-img">
        <img src={data.image} />
      </div>
      <div className="portfolio__projects-project-info">
        <div className="portfolio__projects-project-info-title">
          <h3>{data.name}</h3>
          <img src={data.icon} />
        </div>
        <p>{data.desc}</p>
        <div className="portfolio__projects-project-info-tech">
          <h2>{data.tech[0]}</h2>
          <h2>{data.tech[1]}</h2>
        </div>
        <div className="portfolio__projects-project-info-links">
          <h2>
            <a href={data.code}>Code</a>
          </h2>
          <a href={data.code}>
            <AiOutlineGithub size={25} />
          </a>
          <h2 className="portfolio__projects-project-info-links-livedemo">
            <a href={data.demo}>Live Demo</a>
          </h2>
          <a href={data.demo}>
            <BiLinkExternal size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
