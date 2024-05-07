import { motion } from "framer-motion";
import Founder from "../Components/Founder";
import Menu from "../Components/Menu";

const Home = () => {
  
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="w-full">
      <div className="home w-full min-h-[100vh] px-32 pt-[15vw] overflow-x-hidden">
        <div className="w-full h-full flex flex-col lg:items-start md:items-start items-center">
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            className="text-5xl font-bold uppercase font-serif lg:text-start md:text-start text-center"
          >
            MM burger wala
          </motion.h1>
          <motion.h5
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold lg:text-start md:text-start text-center"
          >
            Give Your Self a Tasty Burger
          </motion.h5>
          <motion.button
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => smoothScrollTo("menu")}
            className="text-white rounded-md lg:w-auto md:w-auto w-full px-4 py-2 focus:outline-none outline-none inline-block mt-5 hover:bg-pink-800 bg-pink-700"
          >
            Explore Menu
          </motion.button>
        </div>
      </div>
      <Founder />
      <Menu />
    </div>
  );
};

export default Home;
