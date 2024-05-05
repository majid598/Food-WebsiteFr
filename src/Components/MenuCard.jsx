import { motion } from "framer-motion";
import { success } from "../main";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";

const MenuCard = ({ itemNum, burgerSrc, price, title, delay = 0 }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const data = { itemNum, title, price, img: burgerSrc };
    dispatch(addToCart(data));
    toast.success(`${title} Added to cart`);
  };

  return (
    <motion.div
      className="card w-4/5 mt-20 mx-auto overflow-hidden relative rounded-2xl"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay }}
    >
      <div className="w-full bg-pink-700 text-white px-6 py-2 text-xl">
        Item {itemNum}
      </div>
      <main className="p-10 flex flex-col items-center">
        <img
          src={burgerSrc}
          alt="Mr Raju Website Creator"
          className="w-full object-contain h-[15rem]"
        />
        <h5 className="text-center text-2xl font-black">PKR {price}</h5>
        <p className="text-xl uppercase font-semibold text-center mt-5">
          {title}
        </p>
        <button
          onClick={addToCartHandler}
          className="w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 rounded-md mt-5"
        >
          By Now
        </button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
