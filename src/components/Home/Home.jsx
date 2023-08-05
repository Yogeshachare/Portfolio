import "./Home.css";
import { HiMapPin } from "react-icons/hi2";
import { BiLogoLinkedin, BiLogoTwitter, BiSolidPhone } from "react-icons/bi";
import { data, links } from "../../data.js";

const Home = () => {
  return (
    <div className="portfolio__home section__padding" id="home">
      <div className="portfolio__home-main">
        <div className="portfolio__home-hero">
          <div className="portfolio__home-hero-info">
            <h1>Hi,I&apos;m Yogesh Achare</h1>
            <h2>Frontend Developer</h2>
            <p>
              {data.heroPara}
              <HiMapPin size={17} color="#fc035e" />
            </p>
            <div className="portfolio__home-hero-button">
              <a href="#contact" type="button" className="custom__button-blue">
                Hire Me
              </a>

              <a href={links.cv}>
                <button type="button" className="custom__button-blue">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="portfolio__home-hero-img">
            <div className="box"></div>
          </div>
        </div>
        <div className="portfolio__home-socials">
          <a href={links.linkedin}>
            <BiLogoLinkedin size={23} />
          </a>
          <a href="#">
            <BiLogoTwitter size={23} />
          </a>
          <a href="tel:9773277626">
            <BiSolidPhone size={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
