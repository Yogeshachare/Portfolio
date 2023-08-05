import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { experiences } from "../../data";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#081c29",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "10px solid #2596be" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="portfolio__experience-icon">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="portfolio__experience-icon-img"
          />
        </div>
      }
    >
      <div>
        <h3 className="portfolio__experience-vtl-title">{experience.title}</h3>
        <p className="portfolio__experience-vtl-company" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="portfolio__experience-vtl-points">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="portfolio__experience-vtl-point"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="portfolio__experience section__padding" id="experience">
      <div className="portfolio__experience-main">
        <div className="portfolio__experience-heading">
          <p>What I have done so far</p>
          <h2>Work Experience</h2>
        </div>
        <div className="portfolio__experience-content">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
