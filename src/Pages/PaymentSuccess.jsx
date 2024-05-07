import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="paymentsuccess w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] bg-white mx-auto items-center text-center flex flex-col h-full py-32">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase font-light text-center text-zinc-600">
          Order Confirmed
        </h1>
        <p className="text-sm font-semibold mt-10 text-center">
          Order Placed Successfully, You can check order status below
        </p>
        <Link
          to="/myorders"
          className="text-white bg-pink-600 py-2 px-12 mt-10 font-bold rounded-md"
        >
          Check Status
        </Link>
      </main>
    </div>
  );
};

export default PaymentSuccess;
