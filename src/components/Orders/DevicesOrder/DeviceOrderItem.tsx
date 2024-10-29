import { Button } from "flowbite-react";

interface Device {
  data: {
    deviceName: string;
    quantity: string;
    usageTime: string;
    note: string;
  };
}

const DeviceOrderItem = (props: Device) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.data.deviceName}
      </th>
      <td className="py-1 px-2">{props.data.quantity}</td>
      <td className=" py-1 px-2">{props.data.usageTime}</td>
      <td>
        <div className="py-1 px-2 ">{props.data.note}</div>
      </td>
      <td>
        <div className=" flex gap-2">
          <Button size={"xs"} gradientMonochrome="info">
            Sửa
          </Button>
          <Button size={"xs"} gradientMonochrome="failure">
            Xóa
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default DeviceOrderItem;
