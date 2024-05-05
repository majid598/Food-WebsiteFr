import { FaUser } from "react-icons/fa";
import { useAllUsersQuery } from "../../redux/api/api";

const Users = () => {
  const arr = [1, 2, 3, 4];
  const { data, isLoading } = useAllUsersQuery();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="tableClass w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] h-full overflow-x-auto p-[3rem] bg-white mx-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {data?.users?.map((i) => (
              <tr key={i?._id}>
                <td># {i?._id}</td>
                <td>{i?.name}</td>
                <td>
                  {i?.profile ? <img src={i?.profile} alt="User" /> : <div className="w-10 h-10 rounded-full bg-zinc-500 flex items-center justify-center">
                    <FaUser className="text-2xl text-zinc-300"/>
                  </div> }
                </td>
                <td>{i?.role}</td>
                <td>{"24-23-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Users;
