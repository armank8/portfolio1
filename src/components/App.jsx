import "../App.css";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Stats from "./Stats";

function App() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Stats></Stats>
    </div>
  );
}

export default App;
