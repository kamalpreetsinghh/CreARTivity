import { logo } from "../assets";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "../components";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-4 sm:px-8 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex gap-4 items-center">
        <ToggleSwitch />
        <Link to="/create-post" className="primary-button">
          Create
        </Link>
        <Link className="primary-button" to="/signin">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
