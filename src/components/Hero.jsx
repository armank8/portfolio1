import { Link } from "react-router-dom";
import all from "../assets/all.svg";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const github = "https://github.com/armank8";
  const resume =
    "https://drive.google.com/file/d/1s4qOp0rKkfnYgiede-EYzJToCj_8H3Wu/view";

  return (
    <section className={styles.home} id="home">
      <div className="section_container container">
        <div className={styles.hero_container}>
          {/* left side intro */}
          <div className={styles.intro}>
            <h4>Hi, I am Arman Kabir</h4>
            <h1>Full-Stack Web Developer</h1>
            <p className="section_subheader" style={{ textAlign: "left" }}>
              JavaScript Programmer
            </p>
            {/* buttons */}
            <div className="button_container">
              <Link to={resume}>
                <button className={styles.glass_button}>Resume</button>
              </Link>
              <Link to={github}>
                <button className={styles.glass_button}>See Github</button>
              </Link>
            </div>
          </div>
          <div className={styles.hero_image}>
            <img style={{ width: "70%" }} src={all} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
