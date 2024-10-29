import LabItems from "./LabItem.tsx";

const LabTable = () => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className=" text-center py-1 px-2">
              Người mượn
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Role
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Status
            </th>
            <th scope="col" className={"py-1 px-2 text-center"}>
              Ngày mượn - Kết thúc
            </th>
            <th scope="col" className="py-1 px-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <LabItems />
        </tbody>
      </table>
    </div>
  );
};

export default LabTable;
