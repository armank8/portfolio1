import all from "../assets/all.svg";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.home} id="home">
      <div className="section_container">
        <div className={styles.hero_container}>
          <div className={styles.intro}>
            <h4>Hi, I am Arman Kabir</h4>
            <h1>Full-Stack Web Developer</h1>
            <p className="section_subheader">JavaScript Programmer</p>
            <div className={styles.button_container}>
              <button className={styles.glass_button}>Resume</button>
              <button className={styles.glass_button}>Contact</button>
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
