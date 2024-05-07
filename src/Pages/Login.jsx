import axios from "axios";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userExists } from "../redux/reducers/userReducer";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import { useState } from "react";
import { server } from "../redux/api/api";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        userDetails,
        {
          withCredentials: true,
        }
      );
      navigate("/me");
      dispatch(userExists(true));
      toast.success(data?.message);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="contact w-full flex h-[calc(100vh-5rem)] overflow-x-hidden bg-no-repeat bg-cover py-10 bg-[url('./assets/bg.png')]">
      {isLoading && <Loader message={"Loging in"} />}
      <motion.form
        onSubmit={handleSubmit}
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
        className="w-2/4 mx-auto bg-white h-full rounded-tr-[12rem] relative rounded-br-[12rem]"
      >
        <div className="flex flex-col w-4/6 px-20 justify-center h-full gap-3 relative">
          <h2 className="text-center text-3xl font-semibold">Login account</h2>

          <input
            type="email"
            className="border-[1px] border-black/50 p-2 w-full rounded-[5px] outline-pink-600"
            placeholder="Email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="border-[1px] border-black/50 p-2 w-full rounded-[5px] outline-pink-600"
            placeholder="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-pink-600 rounded-[5px] p-3 text-white font-bold text-xl"
          >
            Login
          </button>
          <h2 className="text-center">
            Don't have any account?{" "}
            <Link to="/sign-up" className="underline">
              Sign up
            </Link>
          </h2>
          <motion.div
            className="formBorder w-72 absolute -right-1/2 top-1/2 -translate-y-1/2"
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{
                y: "-100vh",
                x: "50%",
                opacity: 0,
              }}
              animate={{
                x: "50%",
                y: "-50%",
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="img"
            >
              <img src={"./assets/burger2.png"} alt="Burger" />
            </motion.div>
          </motion.div>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
