import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import DeviceOrderItem from "./DeviceOrderItem.tsx";

interface Device {
  deviceName: string;
  quantity: string;
  usageTime: string;
  note: string;
}

const DevicesTableOrder = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [usageTime, setUsageTime] = useState("");
  const [note, setNote] = useState("");

  const [formDevices, setFormDevices] = useState<Device[]>([]);

  const handleAddNewClick = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    setFormDevices([
      ...formDevices,
      {
        deviceName: deviceName,
        quantity: quantity,
        usageTime: usageTime,
        note: note,
      },
    ]);
    setDeviceName("");
    setQuantity("");
    setUsageTime("");
    setNote("");
    setIsAdding(false);
  };

  return (
    <div className="mt-2  sm:rounded-lg">
      <div className="flex justify-between ">
        <Label className="flex items-center" value="Thiết bị" />
        <Button
          size="sm"
          className="ml-2 mb-2 focus:outline-none focus:ring-0"
          onClick={handleAddNewClick}
        >
          Thêm mới
        </Button>
      </div>
      <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-3">
              Tên thiết bị
            </th>
            <th scope="col" className=" px-2 py-3">
              Số lượng
            </th>
            <th scope="col" className="px-2 py-3">
              Thời gian sử dụng
            </th>
            <th scope="col" className="px-2 py-3">
              Ghi chú
            </th>
            <th scope="col" className="py-3 px-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isAdding && (
            <tr>
              <td className="px-2 py-1">
                <TextInput
                  placeholder="Tên thiết bị"
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                  required
                />
              </td>
              <td className=" px-2 py-1">
                <TextInput
                  placeholder="Số lượng"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </td>
              <td className=" py-1 px-2">
                <TextInput
                  placeholder="Thời gian sử dụng"
                  value={usageTime}
                  onChange={(e) => setUsageTime(e.target.value)}
                  required
                />
              </td>
              <td className="py-1 px-2">
                <TextInput
                  placeholder="Ghi chú"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                />
              </td>
              <td className="py-1 px-2">
                <Button size="xs" onClick={handleSave}>
                  Lưu
                </Button>
              </td>
            </tr>
          )}
          {formDevices.map((device, index) => (
            <DeviceOrderItem key={index} data={device} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevicesTableOrder;
