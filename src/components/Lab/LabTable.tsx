import LabItems from "./LabItem.tsx";




const LabTable = () => {


  const labData = [
    {
      id: 1,
      borrower: "Yukihara",
      role: "Teacher",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
    },
    {
      id: 2,
      borrower: "Yukihara",
      role: "Teacher",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
    },
    {
      id: 3,
      borrower: "Yukihara",
      role: "Teacher",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
    },
    {
      id: 4,
      borrower: "Yukihara",
      role: "Teacher",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
    },
    {
      id: 5,
      borrower: "Yukihara",
      role: "Student",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
    },
  ];

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center py-1 px-2">
              ID
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Người mượn
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Role
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Status
            </th>
            <th scope="col" className="py-1 px-2 text-center">
              Ngày mượn - Kết thúc
            </th>
            <th scope="col" className="py-1 px-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {labData.map((item) => (
            <LabItems
              key={item.id}
              id={item.id}
              borrower={item.borrower}
              role={item.role}
              status={item.status}
              dateRange={item.dateRange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabTable;
