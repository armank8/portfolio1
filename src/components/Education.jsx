import arman3 from "../assets/arman3.jpg";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section_container">
        <h2>Education</h2>

        <div className="education_container">
          {/* Ewu */}
          <div className="ewu">
            <div className="ewu_info">
              <div  className="ewu_details">
                <p>B.Sc in Computer Science and Engineering(CSE)</p>
                <p>East West University, Bangladesh</p>
                <p>2014-2020</p>
                <p>73% number</p>
              </div>
            </div>
            <div className="ewu-img">
              <img src={arman3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
