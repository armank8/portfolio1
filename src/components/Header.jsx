// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../styles/Header.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TopBar from "./TopBar";
export default function Header() {
  return (
    <header>
      <TopBar></TopBar>
      <div className="container header_container">
        <Link to="/">
          <h4 className="text-2xl font-bold">Arman Kabir Portfolio</h4>
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
            <li className="text-red-500">
              <Link to="#stats">Github & stats</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 text-green-600">
          <Link className="hover:text-red-900" to="https://github.com/armank8" target="_blank">
            <FaGithub />
          </Link>
          <Link className="hover:text-red-900" to="https://www.linkedin.com/in/armank8/" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header>
  );
}
