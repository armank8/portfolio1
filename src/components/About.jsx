import { Link } from "react-router-dom";
import arman4 from "../assets/arman4.png";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section_container container">
        <div className={styles.about_container}>
          {/* left */}
          <div className={styles.about_intro}>
            <h2>About Me</h2>
            <img style={{ width: "80%" }} src={arman4} alt="" />
            <div className="button_container">
              <Link to="/skills">
                <button className={styles.glass_button}>My Skills</button>
              </Link>
              <Link to="/#projects">
                <button className={styles.glass_button}>Projects</button>
              </Link>
            </div>
          </div>
          {/* Right about para  */}
          <div className={styles.para_container}>
            <p className="para">
              I am an enthusiastic and skilled web developer with a deep passion
              for creating outstanding web applications. I have a degree in
              computer science and engineering and participated 1 year long
              professional web development bootcamp in which i scored top 5%
              performance. My expertise expands entire web development stack
              from the front-end to back-end and i love working with a diverse
              set of technologies to create dynamic and user-friendly web
              applications.
            </p>
            {/* <p className="para">
              In the front-end , my proficiency includes HTML, CSS, javaScript,
              TypeScript, ReactJs, NextJs and Redux. I'm well versed in
              component-driven development and i enjoy working with UI libraries
              such as Tailwind CSS, Shadcn UI, Daisy UI, Ant Design, Bootstrap.
              I manage data and tate with React Query and RTK Query. I utilize
              tools like Axios, React-Hook-Form and Yp validation to make
              interaction both engaging and secure. For seamless
              user-authentication i use Firebase, NextAuth and custom
              backend-based authentication if necessary. For quick e-commerce
              solution - I use wordpress, woo-commerce and elementor.
            </p>
            <p className="para">
              In the back-end, m expertise are NodeJs,ExpressJs, MongoDB, SQL,
              PostGreSQL, Mongoose, Prisma. I use both SQL and NoSQL based
              databases in my projects. I write backend api i MVC pattern or
              modular pattern. I use Zod for data validation and JWT for
              authorization and authentication.Feel free to connect with me. I
              am eager to collaborate on exciting projects.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
