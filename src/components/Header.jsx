// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
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
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#education">Education</Link>
            </li>
          </ul>
        </nav>
        <div className="">socials</div>
      </div>
    </header>
  );
}
