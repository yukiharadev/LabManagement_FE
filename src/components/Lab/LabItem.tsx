import { HiCheck, HiEye, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

interface LabItemsProps {
  id: number;
  borrower: string;
  role: string;
  status: string;
  dateRange: string;
}

const LabItems = ({ id, borrower, role, status, dateRange }: LabItemsProps) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/lab/${id}`);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-1 py-2 text-center text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <th
        scope="row"
        className="px-1 py-2 text-center text-gray-900 whitespace-nowrap dark:text-white"
      >
        {borrower}
      </th>
      <td className="px-1 py-2 text-center">{role}</td>
      <td className="px-1 py-2 text-center">{status}</td>
      <td className="px-1 py-2 text-center">{dateRange}</td>
      <td>
        <div className="flex gap-2 px-1 py-2 justify-center">
          <Button
            size="xs"
            onClick={handleView}
            className=" hover:text-white py-1 bg-cyan-100 text-cyan-500 "
          >
            <HiEye />
          </Button>
          <Button
            size="xs"
            color={"success"}
            className=" rounded-lg py-1 bg-green-100 text-green-500 hover:text-white"
          >
            <HiCheck />
          </Button>
          <Button
            color={"failure"}
            size="xs"
            className=" rounded-lg py-1 bg-red-100 text-red-500 hover:text-white "
          >
            <HiOutlineX />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default LabItems;
