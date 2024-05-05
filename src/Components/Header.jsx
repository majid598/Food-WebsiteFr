import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = ({ user }) => {
  return (
    <nav className="w-full h-20 bg-white">
      <div className="w-full h-full border-b-[1px] border-black/30 flex items-center justify-between px-[5vw]">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          className="logo"
        >
          <Link to={"/"}>
            <IoFastFoodOutline className="text-5xl text-pink-600" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: "0" }}
          className="nlinks flex gap-14 font-semibold"
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/cart"}>
            <IoCartOutline className="text-2xl text-pink-600" />
          </Link>
          <Link to={user ? "/me" : "/login"} className="text-pink-600">
            {user ? <FaUser /> : <FiLogIn className="text-xl" />}
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;