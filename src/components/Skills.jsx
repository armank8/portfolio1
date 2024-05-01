import { frontEndSkills, backEndSkills } from "../data/skills";
import SingleSkill from "./SingleSkill";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section_container">
        <h2>My Skills</h2>
        <p className="section_subheader">Techs i am good at</p>

        <div className="skills_container">
          <h3>Front End skills</h3>

          <div className="skills_wrapper">
            {frontEndSkills.map((item) => {
              return <SingleSkill key={item.text} item={item}></SingleSkill>;
            })}
          </div>

          <h3>Backend End skills</h3>

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
