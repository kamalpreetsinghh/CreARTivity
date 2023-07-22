import { logo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="w-full flex justify-between items-center 
      bg-white px-4 py-4 sm:px-8 border-b border-b-[#e6ebf4]"
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
