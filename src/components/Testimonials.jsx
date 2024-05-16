import jhankar1 from "../assets/jhankar1.jpeg";
import ricoz from "../assets/ricoz.jpg";
import ph2 from "../assets/ph2.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section_container container">
        <h2 className="section_header">Testimonials</h2>

        <div className="testimonials_container">
          <div className="level1">
            {/* Level1 info */}
            <div className="testimonial_info">
              <div className="testimonial_image">
                <img src={jhankar1} alt="" />
              </div>
              <h4>Jhankar Mahbub</h4>
            </div>
            {/* level1 description */}
            <p>
              Arman Kabir has completed a rigorous amount of Javascript, HTML,
              CSS, React. Also completed three projects in React and Performed
              among the top 5% of the class.
            </p>
            <p>
              We Found Arman Kabir hard working, dedicated and quick learner,
              who can finish the assigned task on time.
            </p>

            {/* Level2 info */}
            <div className="testimonial_info">
              <div className="testimonial_image">
                <img src={ph2} alt="" />
              </div>
              <h4>Programming Hero</h4>
            </div>
            {/* level2 description */}
            <p>
              In recognition of successful completion of the Next Level Full
              Stack Track Web Development COurse, this intensive program covered
              a comprehensive range of technologies, including TypeScript, Node,
              Express, MongoDB, Mongoose, SQL, PostGreSQL, Prisma, React, Redux,
              Next and Docker. We are confident that the knowledge and skills
              acquired through this program will prepare graduates for a
              reqarding and impactful career in the dynamic world of web
              development. We wish them all the best in their future endeavors.
            </p>

            <div></div>
          </div>

          <div className="ricoz">
            {/* ricoz info */}
            <div className="testimonial_info">
              <div className="testimonial_image">
                <img src={ricoz} alt="" />
              </div>
              <h4>Ricoz</h4>
            </div>
            <p>
              Congratulations on completing 4 months Internship that is from
              01/12/2023 01/04/2024 as a Backend Developer Intern with Ricoz .
              We take this special moment to celebrate this milestone in your
              career. We at Ricoz appreciate your hard work and dedication which
              have brought positive changes to our organization. It was an honor
              to have such an amazing intern working for us.
            </p>
            <p>
              We would like to thank you for all the efforts you have put.
              Without your Skill, it would have not been possible to achieve the
              desired reputation. We are delighted with your work and wish you
              all the very best for all your future endeavors. Your Developing
              skills are praise-worthy and we believe you will succeed in all
              your ventures. We will always value your time you have invested in
              our organization. Wishing you a great career ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
