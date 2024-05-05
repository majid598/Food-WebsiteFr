import { useParams } from "react-router-dom";
import { useSingleOrderQuery } from "../redux/api/api";
import moment from "moment/moment";

const OrderDetails = () => {
  const orderId = useParams().id;
  const { data } = useSingleOrderQuery(orderId);
  const order = data?.order;
  return (
    <div className="orderDetails w-full h-[calc(100vh-5rm)] bg-pink-200">
      <main className="max-w-[900px] bg-white mx-auto -full p-[2rem] overflow-x-auto">
        <h1 className="text-4xl text-center py-10 text-zinc-600 font-light uppercase">
          Order Details
        </h1>
        <div className="my-[2rem] text-center">
          <h1>Shipping</h1>
          <p className="flex gap-2 justify-center">
            <b>Address</b>
            <span>{order?.shippingInfo?.country}</span>
            <span>{order?.shippingInfo?.state}</span>
            <span>{order?.shippingInfo?.city}</span>
            <span>{order?.shippingInfo?.pinCode}</span>
          </p>
        </div>
        <div className="my-[2rem] text-center">
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {order?.user?.name}
          </p>
          <p>
            <b>Phone</b>
            {order?.shippingInfo?.phoneNumber}
          </p>
        </div>

        <div className="my-[2rem] text-center">
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {order?.status}
          </p>
          <p>
            <b>Placed At</b>
            {moment(order?.createdAt).format("DD-MM-YYYY")}
          </p>
          {order?.status === "Delivered" && (
            <p>
              <b>Delivered At</b>
              {moment(order?.deliveredAt).format("DD-MM-YYYY")}
            </p>
          )}
        </div>

        <div className="my-[2rem] text-center">
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {order?.paymentMethod}
          </p>
          <p>
            <b>Payment Reference</b> # {order?.paymentRef}
          </p>
          {order?.status === "Delivered" && (
            <p>
              <b>Paid At</b>
              {order?.paymentMethod === "Online"
                ? moment(order?.createdAt).format("DD-MM-YYYY")
                : moment(order?.deliveredAt).format("DD-MM-YYYY")}
            </p>
          )}
        </div>

        <div className="my-[2rem] text-center">
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>PKR {order?.subtotal}
          </p>
          <p>
            <b>Shipping Charges</b>PKR {order?.shippingCharges}
          </p>
          <p>
            <b>Tax</b>PKR {order?.tax}
          </p>
          <p>
            <b>Total Amount</b>PKR {order?.totalAmount}
          </p>
        </div>

        <article>
          <h1 className="text-4xl font-light tracking-[3px] uppercase text-zinc-600">
            Ordered Items
          </h1>

          {order?.items?.map((item) => (
            <div key={item.itemNum}>
              <h4>{item.title}</h4>
              <div>
                <span>{item.quantity}</span> x <span>{item.price}</span>
              </div>
            </div>
          ))}

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              PKR {order?.subtotal}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
