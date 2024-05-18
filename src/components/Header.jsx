import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header className="container">
      <h3>Arman Kabir Portfolio</h3>
      <nav>
        <ul className={styles.menu_items}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            {/* <a href="/#home">About</a> */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a href="/#about">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
        </ul>
      </nav>
      <div className="">socials</div>
    </header>
  );
}
