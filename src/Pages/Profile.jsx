import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../redux/api/api";
import { useDispatch } from "react-redux";
import { userNotExists } from "../redux/reducers/userReducer";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogoutHandler = async () => {
    await axios
      .get(`${server}/api/v1/user/logout`, { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
        navigate("/");
        toast.success(data?.message);
        dispatch(userNotExists());
      });
  };

  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="profile w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="h-full bg-white flex max-w-[900px] mx-auto flex-col items-center p-[4rem]">
        {user?.profile ? (
          <motion.img
            src={user?.profile}
            alt="Mr Raju Website Creator"
            className="w-[10rem] h-[10rem] mt-10 rounded-full"
            {...options}
          />
        ) : (
          <div className="w-[10rem] bg-zinc-300 flex items-center justify-center h-[10rem] mt-10 rounded-full">
            <FaUser className="text-zinc-500 text-8xl" />
          </div>
        )}
        <motion.h5
          className="text-3xl font-semibold mt-5"
          {...options}
          transition={{ delay: 0.3 }}
        >
          {user?.name}
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          {user?.role === "admin" && (
            <Link
              to="/admin/dashboard"
              className="bg-zinc-700 text-white flex items-center mt-10 gap-5 font-bold px-4 py-3"
            >
              <MdDashboard className="text-xl" /> Dashboard
            </Link>
          )}
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link
            to="/myorders"
            className="bg-pink-600 text-white rounded-md flex items-center mt-10 gap-5 font-bold px-8 py-3"
          >
            Orders
          </Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="rounded-md mt-10 bg-zinc-300 font-bold px-4 py-3"
          onClick={LogoutHandler}
        >
          Logout
        </motion.button>
      </main>
    </div>
  );
};

export default Profile;
