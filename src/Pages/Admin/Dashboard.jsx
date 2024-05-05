import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../../Components/Loader";
import {
  useAllOrdersQuery,
  useAllUsersQuery,
  useStatsQuery,
} from "../../redux/api/api";

ChartJS.register(Tooltip, ArcElement, Legend);

const loading = false;

const Box = ({ title, value }) => (
  <div className="bg-white rounded-full w-[120px] h-[120px] text-center py-[2rem]">
    <h3 className="font-bold text-xl">
      {title === "Income" && "PKR "}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const { data: ordersData } = useAllOrdersQuery();
  const { data: usersData } = useAllUsersQuery();
  const { data: stats } = useStatsQuery();

  const chartData = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [
          stats?.preparingOrders,
          stats?.shippedOrders,
          stats?.deliveredOrders,
        ],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard w-full h-[calc(100vh-5rem)] bg-pink-200">
      {loading === false ? (
        <main className="max-w-[900px] mx-auto bg-white h-full">
          <article className="p-[2rem] flex items-center justify-evenly bg-zinc-800">
            <Box title="Users" value={usersData?.users?.length} />
            <Box title="Orders" value={ordersData?.orders?.length} />
            <Box title="Income" value={stats?.totalIncome} />
          </article>

          <section className="flex justify-between p-[6rem]">
            <div className="w-1/2 flex items-center justify-center flex-col">
              <Link
                to="/admin/orders"
                className="whitespace-nowrap bg-zinc-800 p-4 w-1/2 text-white text-center m-[1rem] rounded-md hover:bg-pink-800 font-bold"
              >
                View Orders
              </Link>
              <Link
                to="/admin/users"
                className="whitespace-nowrap bg-zinc-800 p-4 w-1/2 text-white text-center m-[1rem] rounded-md hover:bg-pink-800 font-bold"
              >
                View Users
              </Link>
            </div>

            <aside className="w-1/2 flex flex-col justify-center items-center">
              <Doughnut data={chartData} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;
