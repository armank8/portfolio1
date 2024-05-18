import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <Link to="/">
          <h4>Arman Kabir Portfolio</h4>
        </Link>
        <nav>
          <ul className={styles.menu_items}>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </nav>
        <div className="">socials</div>
      </div>
    </header>
  );
}
