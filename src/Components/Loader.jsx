import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = ({ message }) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen flex items-center justify-center z-[999] bg-[#ffa2b252]">
      <IoFastFoodOutline className="text-[15rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-700 opacity-30" />

      <div className="loader text-4xl relative z-50 text-black">
        <motion.p>{message ? message : "Loading"}...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
