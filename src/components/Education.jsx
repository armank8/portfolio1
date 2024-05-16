import arman3 from "../assets/arman3.jpg";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import Slider from "./Slider";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section_container">
        <h2 className="section_header">Education</h2>

        <div className="education_container">
          <Slider></Slider>

          {/* Ewu */}
          {/* <div className="institution">
            <div className="institution_info">
              <div className="institution_details">
                <p>B.Sc in Computer Science and Engineering(CSE)</p>
                <p>East West University, Bangladesh</p>
                <p>2014-2020</p>
                <p>73% number</p>
              </div>
            </div>
            <div className="institution_img">
              <img src={arman3} alt="" />
            </div>
          </div> */}

          {/* Level-1 */}
          {/* <div className="institution">
            <div className="institution_info">
              <div className="institution_details">
                <p>B.Sc in Computer Science and Engineering(CSE)</p>
                <p>East West University, Bangladesh</p>
                <p>2014-2020</p>
                <p>73% number</p>
              </div>
            </div>
            <div className="institution_img">
              <img src={certificate1} alt="" />
            </div>
          </div> */}

          {/* Level2 */}
          {/* <div className="institution">
            <div className="institution_info">
              <div className="institution_details">
                <p>B.Sc in Computer Science and Engineering(CSE)</p>
                <p>East West University, Bangladesh</p>
                <p>2014-2020</p>
                <p>73% number</p>
              </div>
            </div>
            <div className="institution_img">
            <div className="institution_img">
              <img src={certificate2} alt="" />
            </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
