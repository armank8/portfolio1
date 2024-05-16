import { frontEndSkills, backEndSkills } from "../data/skills.jsx";
import SingleSkill from "./SingleSkill";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section_container container">
        <h2 className="section_header">My Skills</h2>
        <p className="section_subheader">Techs i am good at</p>

        <div className="skills_container">
          <h4>Front End skills</h4>

          <div className="skills_wrapper">
            {frontEndSkills.map((item) => {
              return <SingleSkill key={item.text} item={item}></SingleSkill>;
            })}
          </div>

          <h4>Backend End skills</h4>

          <div className="skills_wrapper">
            {backEndSkills.map((item) => {
              return <SingleSkill key={item.text} item={item}></SingleSkill>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
