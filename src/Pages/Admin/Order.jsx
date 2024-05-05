import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import {
  useAllOrdersQuery,
  useProcessOrderMutation,
} from "../../redux/api/api";
import { toast } from "react-toastify";

const Orders = () => {
  const { data, isLoading } = useAllOrdersQuery();

  const [processOrder] = useProcessOrderMutation();
  const updateStatus = (id) => {
    processOrder(id)
      .unwrap()
      .then((data) => toast.success(data?.message))
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className="tableClass w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] h-full bg-white mx-auto p-10 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.orders?.map((i) => (
              <tr key={i}>
                <td className="text-center"># {i._id}</td>
                <td className="text-center">{i.status}</td>
                <td className="text-center">{i.items.length}</td>
                <td className="text-center">PKR {i.totalAmount}</td>
                <td className="text-center">{i.paymentMethod}</td>
                <td className="text-center">{i.user.name}</td>
                <td className="flex gap-4 text-pink-800">
                  <Link to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>

                  <button onClick={() => updateStatus(i._id)}>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
