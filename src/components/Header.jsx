import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header className="container">
      <h3>Arman Kabir Portfolio</h3>
      <div>
        <ul className={styles.menu_items}>
          <li>
            <a href="">Home</a>
          </li>
          <li><a href="#home">About</a></li>
          <li><a href="#about">Skills</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Education</a></li>
        </ul>
      </div>
      <div className="">socials</div>
    </header>
  );
}
