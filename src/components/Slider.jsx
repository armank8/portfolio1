import arman3 from "../assets/arman3.jpg";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import styles from "../styles/Slider.module.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Slider() {
  return (
    <swiper-container
      class="mySwiper"
      pagination="true"
      effect="coverflow"
      grab-cursor="true"
      centered-slides="true"
      slides-per-view="auto"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
    >
      <swiper-slide>
        <div className={styles.slide_div}>
          <img src={certificate2} />
          <h2>We dev</h2>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src={arman3} />
      </swiper-slide>
      <swiper-slide>
        <img src={certificate1} />
      </swiper-slide>
    </swiper-container>
  );
}
