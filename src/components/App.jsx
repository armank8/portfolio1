import "../App.css";
import arman2 from "../assets/arman2.png";
import About from "./About";
import Education from "./Education";
import GoTop from "./GoTop";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header></Header>
      <GoTop></GoTop>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Stats></Stats>
      <Testimonials></Testimonials>
      
    </div>
  );
}

export default App;
