import { Button } from "flowbite-react";

interface Device {
  data: {
    deviceId: number;
    deviceItemId: number;
    startDate: Date;
    endDate: Date;
    description: string;
  };
}

const DeviceOrderItem: React.FC<Device> = ({ data }) => {
  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.deviceId}
      </th>

      <td className="py-1 px-2">{data.deviceItemId}</td>
      <td className="py-1 px-2">
        {data.startDate.toISOString().slice(0, 10)}
      </td>
      <td className="px-2 py-1">
        {data.endDate.toISOString().slice(0, 10)}
      </td>
      <td>
        <div className="py-1 px-2">{data.description}</div>
      </td>

      <td>
        <div className="flex gap-2">
          <Button size="xs" gradientMonochrome="info">
            Sửa
          </Button>
          <Button size="xs" gradientMonochrome="failure">
            Xóa
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default DeviceOrderItem;
