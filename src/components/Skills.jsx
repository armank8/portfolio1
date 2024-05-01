import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section_container">
        <h2>My Skills</h2>
        <p className="section_subheader">Techs i am good at</p>

        <div className="skills_container">
          <h3>Front End skills</h3>
          <div className="front">
            <SkillBox></SkillBox>
          </div>
        </div>
      </div>
    </section>
  );
}
