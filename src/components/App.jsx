import "../App.css";
import About from "./About";
import Education from "./Education";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <About></About>
      {/* <Testimonials></Testimonials> */}
      <Education></Education>
    </div>
  );
}

export default App;
