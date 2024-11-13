import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import CreateDeviceItem from "./CreateDeviceItem.tsx";

interface DeviceData {
  id: number;
  deviceName: string;
  total: number;
  categoryId: number;
  deviceItems: {
    id: number;
    deviceItemId: number;
    deviceItemName: string;
    deviceItemStatus: number;
    description: string;
  }[];
}

const DeviceDetailItem = () => {
  const { id } = useParams<{ id: string }>();
  const deviceId = Number(id);

  const [deviceData, setDeviceData] = useState<DeviceData | null>(null);

  useEffect(() => {
    const getDeviceData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5007/api/devices/get-by-id/${deviceId}`,
        );
        const data: DeviceData = await response.json();
        setDeviceData(data);
        console.log("data", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getDeviceData();
  }, [deviceId]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <Label>id</Label>
        <TextInput
          type="text"
          value={deviceData?.id?.toString() || ""}
          disabled
          readOnly
        />
      </div>
      <div className="col-span-1">
        <Label>Tên thiết bị</Label>
        <TextInput type="text" value={deviceData?.deviceName || ""} disabled />
      </div>
      <div className="col-span-1">
        <Label>Tổng</Label>
        <TextInput
          type="text"
          value={deviceData?.total?.toString() || ""}
          disabled
        />
      </div>
      <div className="col-span-1">
        <Label>Loại thiết bị</Label>
        <TextInput
          type="text"
          value={deviceData?.categoryId?.toString() || ""}
          disabled
        />
      </div>
      <div className="col-span-4">
        <div className="flex mb-1 justify-between">
          <Label>Chi tiết thiết bị</Label>
          <CreateDeviceItem id={deviceId} />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Tên thiết bị
              </th>
              <th scope="col" className="px-2 py-3">
                Số lượng
              </th>
              <th scope="col" className="px-2 py-3">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {deviceData?.deviceItems.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={item.deviceItemId}
              >
                <td className="px-2 py-4 whitespace-nowrap">
                  {item.deviceItemName}
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  {item.deviceItemStatus === 1
                    ? "Đang hoạt động"
                    : item.deviceItemStatus === 2
                      ? "Hỏng hóc"
                      : "Đang được mượn"}
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceDetailItem;
