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
            <h4 className="text-2xl">Hi, I am Arman Kabir</h4>
            <h1 className="text-4xl font-black">Full-Stack Web Developer</h1>
            <p className="section_subheader" style={{ textAlign: "left" }}>
              JavaScript Programmer
            </p>
            {/* buttons */}
            <div className="button_container">
              <a href={resume} target="_blank">
                <button className="btn">Resume</button>
              </a>
              <a href={github} target="_blank">
                <button className="btn">See Github</button>
              </a>
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
