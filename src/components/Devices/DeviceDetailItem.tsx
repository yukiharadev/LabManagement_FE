import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge, Button, Label, TextInput } from "flowbite-react";
import CreateDeviceItem from "./CreateDeviceItem.tsx";
import { HiOutlineX } from "react-icons/hi";
import api from "../../configs/axios.config.tsx";
import { DELETE_DEVICES_ITEM_URL, GET_DEVICE_BY_ID_URL } from "../../configs/Api.config.tsx";
import UpdateItem from "./UpdateItem.tsx";
import { toast } from "react-toastify";

interface DeviceData {
  id: number;
  deviceName: string;
  total: number;
  categoryName: string;
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

  const userData = localStorage.getItem("userdata");
  console.log(userData);

  const fetchDeviceData = async () => {
    try {
      const response = await api.get(GET_DEVICE_BY_ID_URL(deviceId));
      const data: DeviceData = response.data;
      setDeviceData(data);
    } catch (error) {
      console.error("Error fetching device data:", error);
    }
  };

  const removeItem = async (deviceItemId: number) => {
    try {
      const response = await api.delete(DELETE_DEVICES_ITEM_URL(deviceId, deviceItemId));
      if (response.status === 204) {
        fetchDeviceData();
        toast.success("Xóa thiết bị thành công");
      }
    } catch (error) {
      console.error("Error deleting device item:", error);
      toast.error("Xóa thiết bị thất bại");
    }
  };

  useEffect(() => {
    fetchDeviceData();
  }, [deviceId]);

  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="col-span-1">
        <Label>Id</Label>
        <TextInput type="text" value={deviceData?.id?.toString() || ""} disabled readOnly />
      </div>
      <div className="col-span-1">
        <Label>Tên thiết bị</Label>
        <TextInput type="text" value={deviceData?.deviceName || ""} disabled />
      </div>
      <div className="col-span-1">
        <Label>Tổng</Label>
        <TextInput type="text" value={deviceData?.total?.toString() || ""} disabled />
      </div>
      <div className="col-span-1">
        <Label>Loại thiết bị</Label>
        <TextInput type="text" value={deviceData?.categoryName || ""} disabled />
      </div>
      
      <div className="col-span-4">
        <div className="flex mb-1 justify-between">
          <Label>Chi tiết thiết bị</Label>
          { userData && JSON.parse(userData).roles.includes("admin") ?
              <CreateDeviceItem id={deviceId} onItemCreated={fetchDeviceData} />: null
          }
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-2 py-3">Tên thiết bị</th>
              <th className="px-2 py-3">Trạng thái</th>
              <th className="px-2 py-3">Ghi chú</th>
              {
                userData && JSON.parse(userData).roles.includes("admin") ?
                <th className="px-2 py-3">Hành động</th>: null
              }
            </tr>
          </thead>
          <tbody>
            {deviceData?.deviceItems.map((item) => (
              <tr
                key={item.deviceItemId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-2 py-4">{item.deviceItemName}</td>
                <td className="px-2 py-4">
                  <div className="flex">
                    {item.deviceItemStatus === 1 ? (
                      <Badge color="success">Đang hoạt động</Badge>
                    ) : item.deviceItemStatus === 0 ? (
                      <Badge color="failure">Đã hỏng</Badge>
                    ) : (
                      <Badge color="warning">Đang được mượn</Badge>
                    )}
                  </div>
                </td>
                <td className="px-2 py-4">{item.description}</td>
                {
                    userData && JSON.parse(userData).roles.includes("admin") ?
                        <td className="flex px-2 py-4 space-x-2">
                          <UpdateItem id={deviceId} data={item} onItemCreated={fetchDeviceData}
                                      deviceItemId={item.deviceItemId}/>
                          <Button
                              color="failure"
                              size="xs"
                              onClick={() => removeItem(item.deviceItemId)}
                              className="rounded-lg py-1 bg-red-100 text-red-500 hover:text-white"
                          >
                            <HiOutlineX/>
                          </Button>
                        </td> : null
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceDetailItem;
