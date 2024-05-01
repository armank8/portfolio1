// import { FaReact } from "react-icons/fa";
export default function SkillBox({item}) {
  return (
    <div className="skill_box">
      {/* <FaReact></FaReact> */}
      {item.icon}
      <span>{item.text}</span>
    </div>
  );
}
