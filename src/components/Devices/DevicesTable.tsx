const DevicesTable = () => {
  return (
    <div className="mt-2  sm:rounded-lg">
      <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-3">
              Id
            </th>
            <th scope="col" className="px-2 py-3">
              Tên thiết bị
            </th>
            <th scope="col" className=" px-2 py-3">
              Số lượng
            </th>
            <th scope="col" className="px-2 py-3">
              Tình trạng
            </th>
            <th scope="col" className="py-3 px-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-2 py-4 whitespace-nowrap">1</td>
            <td className="px-2 py-4 whitespace-nowrap">Máy chiếu</td>
            <td className="px-2 py-4 whitespace-nowrap">2</td>
            <td className="px-2 py-4 whitespace-nowrap">Đang sử dụng</td>
            <td className="px-2 py-4 whitespace-nowrap">
              <div className="flex gap-2">
                <button className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
                  Sửa
                </button>
                <button className="text-xs text-white bg-red-500 px-2 py-1 rounded">
                  Xóa
                </button>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-2 py-4 whitespace-nowrap">2</td>
            <td className="px-2 py-4 whitespace-nowrap">Máy in</td>
            <td className="px-2 py-4 whitespace-nowrap">1</td>
            <td className="px-2 py-4 whitespace-nowrap">Đang sử dụng</td>
            <td className="px-2 py-4 whitespace-nowrap">
              <div className="flex gap-2">
                <button className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
                  Sửa
                </button>
                <button className="text-xs text-white bg-red-500 px-2 py-1 rounded">
                  Xóa
                </button>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-2 py-4 whitespace-nowrap">3</td>
            <td className="px-2 py-4 whitespace-nowrap">Máy tính</td>
            <td className="px-2 py-4 whitespace-nowrap">5</td>
            <td className="px-2 py-4 whitespace-nowrap">Đang sử dụng</td>
            <td className="px-2 py-4 whitespace-nowrap">
              <div className="flex gap-2">
                <button className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
                  Sửa
                </button>
                <button className="text-xs text-white bg-red-500 px-2 py-1 rounded">
                  Xóa
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DevicesTable;
