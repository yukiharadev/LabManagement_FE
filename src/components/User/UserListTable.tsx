import UserListItem from "./UserListItem.tsx";

const UserListTable = () => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
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
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
