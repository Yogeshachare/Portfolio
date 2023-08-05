import "./About.css";
import laptop from "../../assets/laptop.jpg";
import { HiMapPin } from "react-icons/hi2";
import { data } from "../../data";
import Tech from "../Tech/Tech";

const About = () => {
  const text = "FRONT-END WEB DEVELOPER";
  const circleText = text.split("").map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 15}deg)` }}>
      {char}
    </span>
  ));
  return (
    <div className="portfolio__about section__padding" id="about">
      <div className="portfolio__about-main">
        <div className="portfolio__about-main-img">
          <div className="circle">
            <div className="logo"></div>
            <div className="text">
              <p>{circleText}</p>
            </div>
          </div>
          <img src={laptop} alt="laptop" />
        </div>
        <div className="portfolio__about-main-info">
          <p>About me</p>
          <p>
            A dedicated Front-end React Developer based in Maharashtra, Navi
            Mumbai.
            <HiMapPin size={17} color="#fc035e" />
          </p>
          <p>{data.aboutMe}</p>
        </div>
      </div>
      <div className="portfolio__about-techstack">
        <h1>Tech Stack</h1>
        <Tech />
      </div>
    </div>
  );
};

export default About;
