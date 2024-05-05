import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useMyOrdersQuery } from "../redux/api/api";

const MyOrders = () => {
  const {data} = useMyOrdersQuery()

  return (
    <div className="tableClass w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] bg-white h-full mx-auto p-[2rem] overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr >
              <th>Order Id</th>
              <th>Status</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.orders?.map((i) => (
              <tr key={i}>
                <td># {i._id}</td>
                <td>{i.status}</td>
                <td>{i.items.length}</td>
                <td>PKR {i.totalAmount}</td>
                <td>{i.paymentMethod}</td>
                <td>
                  <Link className="text-pink-600" to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default MyOrders;