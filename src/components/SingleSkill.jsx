// import { FaReact } from "react-icons/fa";
export default function SingleSkill({ item }) {
  return (
    <div className="single_skill">
      {/* <FaReact></FaReact> */}
      <div className="body">
      <span>{item.icon}</span>
      <span>{item.text}</span>
      </div>
    </div>
  );
}
