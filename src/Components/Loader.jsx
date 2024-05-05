import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center relative bg-pink-200">
      <IoFastFoodOutline className="text-[15rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-700 opacity-30" />

      <div className="loader text-4xl relative z-50 text-black">
        <motion.p >Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
