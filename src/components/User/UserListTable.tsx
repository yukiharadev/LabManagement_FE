import UserListItem from "./UserListItem.tsx";
import CreateUserForm from "./CreateUserForm.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  fullName: string;
  username: string;
  email: string;
  roles: [string];
  status: string;
  avatar: string;
}

const UserListTable = () => {
  const [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
    const getUserList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5007/api/user/get-all`,
        );
        const data = await response.data;
        setUserList(data);
        console.log(data);
        console.log("userList", userList);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getUserList();
  }, []);

  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between">
        <span className=" flex items-center text-xl font-bold">
          {" "}
          Thông tin người dùng{" "}
        </span>
        <CreateUserForm />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
