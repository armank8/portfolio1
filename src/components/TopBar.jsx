import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="h-6 bg-green-600 flex items-center justify-center gap-5 pt-0 mt-0">
      <p>armankabir8@gmail.com</p>
      <p>+8801926-204425</p>
      <p>
        Github Profile : 
        <Link to="https://github.com/armank8" target="_blank">
          <span className="underline text-red-900 font-bold hover:text-white"> https://github.com/armank8</span>
        </Link>
      </p>
    </div>
  );
}
