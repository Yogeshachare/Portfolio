import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Projects,
} from "./components";
import "./App.css";
import StarsCanvas from "./canvas/Stars";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <div style={{ position: "relative" }}>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
