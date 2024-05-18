import "../App.css";
import arman2 from "../assets/arman2.png";
import About from "./About";
import Education from "./Education";
import Footer from "./Footer";
import GoTop from "./GoTop";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
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
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
