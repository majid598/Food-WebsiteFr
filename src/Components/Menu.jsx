import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

const Menu = () => {
  const dishes = [
    {
      price: 200,
      title: "Cheese Burger",
      img: "/assets/burger1.png",
      delay: 0.2,
      itemNum: 1,
    },
    {
      price: 1150,
      title: "Malai Bootti",
      img: "/assets/boti pizza.png",
      delay: 0.5,
      itemNum: 2,
    },
    {
      price: 350,
      title: "Zinger Burger",
      img: "/assets/burger2.png",
      delay: 0.8,
      itemNum: 3,
    },
    {
      price: 780,
      title: "Mirchi Pizza",
      img: "/assets/mirchi pizza.png",
      delay: 0.2,
      itemNum: 4,
    },
    {
      price: 950,
      title: "Zinger Burger With Fries",
      img: "/assets/burger2.png",
      delay: 0.5,
      itemNum: 5,
    },
    {
      price: 650,
      title: "Simple Pizza",
      img: "/assets/simple pizza.png",
      delay: 0.8,
      itemNum: 6,
    },
  ];

  return (
    <div id="menu" className="w-full min-h-screen">
      <motion.h1
        className="w-full text-6xl font-serif font-bold text-center pt-24"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Menu
      </motion.h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-48">
        {dishes.map((dish) => (
          <MenuCard
            key={dish.itemNum}
            price={dish.price}
            itemNum={dish.itemNum}
            burgerSrc={dish.img}
            title={dish.title}
            delay={dish.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
