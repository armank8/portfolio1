import { useEffect, useState } from "react";
import styles from "../styles/GoTop.module.css";
import { BsRocket } from "react-icons/bs";
export default function GoTop() {
  const [show, setShow] = useState(false);
  const [gotop, setGotop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 1500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  useEffect(() => {
    if (gotop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setGotop(false);
  }, [gotop]);

  return (
    <div
      className={styles.gotop_div}
      style={{ display: show ? "block" : "none" }}
      onClick={() => setGotop(true)}
    >
      <div className={styles.top_icon}>
        <BsRocket />
      </div>
      Go Top
    </div>
  );
}
