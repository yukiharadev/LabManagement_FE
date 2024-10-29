import { Button } from "flowbite-react";
import { HiCheck, HiEye, HiOutlineX } from "react-icons/hi";

const LabItems = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex justify-center  px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        Yukihara
      </th>
      <td className="px-2 py-4 text-center">Teacher</td>
      <td className=" px-2 py-4 text-center">Processing</td>
      <td>
        <div className="px-2 py-4 text-center ">30/10/2024- 1/11/2024</div>
      </td>
      <td>
        <div className=" flex gap-2 px-2 py-4 justify-center">
          <Button size={"xs"} gradientMonochrome="info">
            <HiEye />
          </Button>
          <Button size={"xs"} gradientMonochrome={"teal"}>
            {" "}
            <HiCheck />
          </Button>
          <Button size={"xs"} gradientMonochrome="failure">
            <HiOutlineX />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default LabItems;
