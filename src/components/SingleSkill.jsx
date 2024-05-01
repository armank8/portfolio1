// import { FaReact } from "react-icons/fa";
export default function SingleSkill({ item }) {
  return (
    <div className="single_skill">
      {/* <FaReact></FaReact> */}
      {item.icon}
      <span>{item.text}</span>
    </div>
  );
}
