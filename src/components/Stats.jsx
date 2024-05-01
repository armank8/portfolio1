import github from "../assets/github.png";
import { FaGithub } from "react-icons/fa";

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="section_container">
        <div className="stats_header">
          <h2>Stats</h2>
          <p>Projects I have completed</p>
        </div>

        <div className="stats_container">
          <div className="stat_box">
            <h3>React</h3>
            <p>10+</p>
          </div>
          <div className="stat_box">
            <h3>Node</h3>
            <p>10+</p>
          </div>
          <div className="stat_box">
            <h3>Next</h3>
            <p>4</p>
          </div>
          <div className="stat_box">
            <h3>MongoDB</h3>
            <p>10+</p>
          </div>
          <div className="stat_box">
            <h3>postgreSQL</h3>
            <p>3</p>
          </div>
        </div>
        <div className="github">
          <h2>
            See complete reference to <br></br>
            <a href="https://github.com/armank8" target="_blank">
              <FaGithub /> <span>Github</span>
            </a>
          </h2>
          <img src={github} alt="" />
        </div>
      </div>
    </section>
  );
}
