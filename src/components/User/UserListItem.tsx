import { Badge } from "flowbite-react";
import EditUserDrawer from "./EditUserDrawer.tsx";
import DeleteUserModel from "./DeleteUserModel.tsx";

interface UserProps {
  user: {
    fullName: string;
    username: string;
    email: string;
    roles: [string];
    status: string;
    avatar: string;
  };
}

const UserListItem = (user: UserProps) => {
  console.log("user", user);
  console.log("role", user.user.roles);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user.user.avatar}
          alt={user.user.avatar}
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{user.user.fullName}</div>
          <div className="font-normal text-gray-500">{user.user.username}</div>
        </div>
      </th>
      <td className="px-6 py-4">{user.user.roles}</td>
      <td className="px-6 py-4">
        <div className="flex">
          <Badge color="success">Active</Badge>
        </div>
      </td>
      <td className=" py-4">
        <div className="flex justify-center ">
          <EditUserDrawer />
          <DeleteUserModel />
        </div>
      </td>
    </tr>
  );
};

export default UserListItem;
