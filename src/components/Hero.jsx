import all from "../assets/all.svg";
import styles from "../styles/Hero.module.css";

export default function Hero() {
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
              <button className={styles.glass_button}>Resume</button>
              <button className={styles.glass_button}>See Github</button>
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
