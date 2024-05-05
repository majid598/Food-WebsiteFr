import { motion } from "framer-motion";

const Founder = () => {
  return (
    <div className="h-[80vh] bg-pink-700 text-white overflow-hidden">
      <div className="w-1/2 mx-auto overflow-hidden h-full">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <div className=" overflow-hidden w-44 h-44 rounded-full">
            <img src="./assets/founder.webp" alt="" />
          </div>
          <h1 className="text-3xl font-bold mt-4 font-mono">Mr Majid</h1>
          <p className="text-center mt-6 font-mono">
            Hey, Everyone I am Majid Ali, the founder of MM Burger Wala.
            <br />
            Our aim is to create the most tasty burger on planet.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
