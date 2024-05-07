import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  calculatePrice,
  calculateTotalPrice,
  removeFromCart,
} from "../redux/reducers/cartReducer";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem bg-black/10 flex items-center justify-between p-[1rem]">
    <div className="flex items-center">
      <h4 className="tracking-[2px] font-semibold">{title}</h4>
      <img src={img} className="h-16" alt="Mr Raju Website Creator" />
    </div>

    <div className="flex items-center gap-3">
      <button
        onClick={decrement}
        className="w-6 h-6 border-[1px] border-black/40 flex items-center justify-center rounded-md"
      >
        <TiMinus className="text-zinc-800 text-sm" />{" "}
      </button>
      <input
        type="number"
        readOnly
        className="text-center w-[2rem] h-[2rem] p-1 border-none outline-none rounded-md text-pink-600"
        value={value}
      />
      <button
        onClick={increment}
        className="w-6 h-6 border-[1px] border-black/40 flex items-center justify-center rounded-md"
      >
        <FaPlus className="text-sm text-zinc-700" />
      </button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const { items, subtotal, tax, total, shippingCharges } = useSelector(
    (state) => state.cart
  );

  const increment = (data) => {
    dispatch(addToCart(data));
    dispatch(calculatePrice());
  };

  const decrement = (item) => {
    if (item.quantity <= 1) return;
    dispatch(removeFromCart({ itemNum: item.itemNum }));
    dispatch(calculatePrice());
  };

  useEffect(() => {
    dispatch(calculatePrice());
  }, [dispatch]);

  return (
    <div className="cart w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] p-[2rem] flex flex-col gap-5 h-full bg-white mx-auto">
        {items?.map((item, index) => (
          <CartItem
            key={item?.itemNum}
            title={item?.title}
            img={item?.img}
            value={item?.quantity}
            increment={() => {
              const data = {
                title: item.title,
                img: item.img,
                itemNum: item.itemNum,
                price: item.price,
              };
              increment(data);
            }}
            decrement={() => decrement(item)}
          />
        ))}
        <article className="p-[2rem]">
          <div className="flex justify-between my-[1rem]">
            <h4>Sub Total</h4>
            <p>PKR {subtotal}</p>
          </div>
          <div className="flex justify-between my-[1rem]">
            <h4>Tax</h4>
            <p>PKR {tax}</p>
          </div>
          <div className="flex justify-between my-[1rem]">
            <h4>Shipping Charges</h4>
            <p>PKR {shippingCharges}</p>
          </div>{" "}
          <div className="flex justify-between my-[1rem]">
            <h4>Total</h4>
            <p>PKR {total}</p>
          </div>
          <Link
            to="/shipping"
            className="bg-pink-600 rounded-md float-right text-white font-bold px-4 py-2 mt-3 inline-block"
          >
            Checkout
          </Link>
        </article>
      </main>
    </div>
  );
};

export default Cart;
