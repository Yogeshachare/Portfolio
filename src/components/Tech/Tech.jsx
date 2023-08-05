import BallCanvas from "../../canvas/Ball";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../data";
import "./Tech.css";

const Tech = () => {
  return (
    <div className="about__tech">
      {technologies.map((technology) => (
        <div className="about__tech-ball" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
