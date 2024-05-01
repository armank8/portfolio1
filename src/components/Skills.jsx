import SkillBox from "./SkillBox";
import { frontEndSkills, backEndSkills } from "../data/skills";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section_container">
        <h2>My Skills</h2>
        <p className="section_subheader">Techs i am good at</p>

        <div className="skills_container">
          <h3>Front End skills</h3>

          <div className="front">
            {frontEndSkills.map((item) => {
              return <SkillBox key={item.text} item={item}></SkillBox>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
