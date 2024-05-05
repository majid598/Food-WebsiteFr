import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="paymentsuccess w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] bg-white mx-auto flex flex-col items-center h-full py-32">
        <h1 className="text-5xl uppercase font-light text-zinc-600">Order Confirmed</h1>
        <p className="text-sm font-semibold mt-10">Order Placed Successfully, You can check order status below</p>
        <Link to="/myorders" className="text-white bg-pink-600 py-2 px-12 mt-10 font-bold rounded-md">Check Status</Link>
      </main>
    </div>
  );
};

export default PaymentSuccess;