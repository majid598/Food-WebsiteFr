import { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../redux/api/api";
import { toast } from "react-toastify";
import { clearCart } from "../redux/reducers/cartReducer";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("C.O.D");
  const { items, subtotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const [placeOrder] = usePlaceOrderMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      items,
      subtotal,
      tax,
      shippingCharges,
      totalAmount: total,
      shippingInfo,
      paymentMethod,
      paymentRef: "C.O.D",
    };
    if (paymentMethod === "Online") return navigate("/pay");

    placeOrder(order)
      .unwrap()
      .then((data) => {
        toast.success(data?.message);
        dispatch(clearCart());
        navigate("/order/success");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.data?.message);
      });
  };

  return (
    <section className="confirmOrder w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] bg-white mx-auto p-[2rem] h-full">
        <h1 className="text-4xl uppercase text-zinc-600 font-light text-center mt-20">
          Confirm Order
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-center p-20"
        >
          <label
            onClick={() => setPaymentMethod("C.O.D")}
            className="w-full cursor-pointer bg-zinc-200 my-2 py-4 justify-between flex px-10 items-center rounded-md"
            htmlFor="cash"
          >
            Cash On Delivery
            <input
              type="radio"
              id="cash"
              className="cursor-pointer"
              name="payment"
            />
          </label>

          <label
            onClick={() => setPaymentMethod("Online")}
            htmlFor="online"
            className="w-full cursor-pointer bg-zinc-200 my-2 py-4 justify-between flex px-10 items-center rounded-md"
          >
            Online
            <input
              type="radio"
              id="online"
              className="cursor-pointer"
              name="payment"
            />
          </label>
          <button
            type="submit"
            id="btn"
            className="bg-pink-600 p-3 rounded-md font-bold text-white w-44 mt-10"
          >
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
