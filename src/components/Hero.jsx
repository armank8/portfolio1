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
            <p>JavaScript Programmer</p>
            <h1></h1>
          </div>
          <div className="hero_image">
            <img src={all} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
