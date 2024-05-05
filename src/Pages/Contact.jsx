import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact w-full flex h-[calc(100vh-5rem)] overflow-x-hidden bg-no-repeat bg-cover py-10 bg-[url('./assets/bg.png')]">
      <motion.form
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
          <h2 className="text-center text-3xl font-semibold">Contact Us</h2>
          <input
            type="text"
            className="border-[1px] border-black/50 p-2 w-full rounded-[5px] outline-pink-600"
            placeholder="Name"
          />
          <input
            type="email"
            className="border-[1px] border-black/50 p-2 w-full rounded-[5px] outline-pink-600"
            placeholder="Email"
          />
          <textarea
            placeholder="Message..."
            cols="30"
            rows="10"
            className="border-[1px] border-black/50 p-2 w-full rounded-[5px] outline-pink-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 rounded-[5px] p-3 text-white font-bold text-xl"
          >
            Send
          </button>
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

export default Contact;
