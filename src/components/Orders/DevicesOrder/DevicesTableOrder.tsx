import React, { useEffect, useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DeviceOrderItem from "./DeviceOrderItem";
import api from "../../../configs/axios.config";
import { GET_ALL_DEVICES_URL, GET_DEVICE_BY_ID_URL } from "../../../configs/Api.config";

interface Device {
  deviceId: number;
  deviceItemId: number;
  startDate: Date;
  endDate: Date;
  description: string;
}

interface DevicesTableOrderProps {
  onChange: (devices: Device[]) => void;
}

const DevicesTableOrder: React.FC<DevicesTableOrderProps> = ({ onChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [formDevices, setFormDevices] = useState<Device[]>([]);
  const [deviceId, setDeviceId] = useState(0);
  const [deviceItemId, setDeviceItemId] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [description, setDescription] = useState("");

  const [devices, setDevices] = useState([]);
  const [deviceItem, setDeviceItem] = useState([]);

  useEffect(() => {
    const devicesData = async () => {
      const data = await api.get(GET_ALL_DEVICES_URL);
      const response = await data.data;
      setDevices(response);
    };

    devicesData();
  }, []);

  useEffect(() => {
    if (deviceId !== 0) {
      const fetchDeviceItems = async () => {
        const data = await api.get(GET_DEVICE_BY_ID_URL(deviceId));
        const response = await data.data.deviceItems;
        setDeviceItem(response);
      };
      fetchDeviceItems();
    }
  }, [deviceId]);

  const handleSaveNewDevice = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    const newDevices = [
      ...formDevices,
      { deviceId, deviceItemId: Number(deviceItemId), startDate, endDate, description },
    ];
    setFormDevices(newDevices);
    setDeviceId(0);
    setDeviceItemId("");
    setStartDate(null);
    setEndDate(null);
    setDescription("");
    setIsAdding(false);
    onChange(newDevices);
  };

  return (
    <div className="mt-2 sm:rounded-lg">
      <div className="flex justify-between">
        <Label className="flex items-center" value="Thiết bị" />
        <Button
          size="sm"
          className="ml-2 mb-2 focus:outline-none focus:ring-0"
          onClick={() => setIsAdding(true)}
        >
          Thêm mới
        </Button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-3">Device ID</th>
            <th scope="col" className="px-2 py-3">Device Item ID</th>
            <th scope="col" className="px-2 py-3">Start Date</th>
            <th scope="col" className="px-2 py-3">End Date</th>
            <th scope="col" className="px-2 py-3">Description</th>
            <th scope="col" className="px-2 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isAdding && (
            <tr>
              <td className="px-2 py-1">
                <Select value={deviceId} onChange={(e) => setDeviceId(Number(e.target.value))}>
                  <option value="0">Chọn thiết bị</option>
                  {devices.map((device: any) => (
                    <option key={device.id} value={device.id}>
                      {device.deviceName}
                    </option>
                  ))}
                </Select>
              </td>
              <td className="px-2 py-1">
                <Select value={deviceItemId} onChange={(e) => setDeviceItemId(e.target.value)}>
                  <option value="">Chọn mã thiết bị</option>
                  {deviceItem.map((item: any) => (
                    <option key={item.deviceItemId} value={item.deviceItemId}>
                      {item.deviceItemName}
                    </option>
                  ))}
                </Select>
              </td>
              <td className="px-2 py-1" >
                <DatePicker
                  selected={startDate}
                  className="rounded-lg border border-gray-300"
                  onChange={(date: Date | null) => setStartDate(date)}
                  placeholderText="Start Date"
                  showTimeSelect
                  dateFormat="Pp"
                  required
                />
              </td>
              <td className="px-2 py-1">
                <DatePicker
                  selected={endDate}
                  className="rounded-lg border border-gray-300"
                  onChange={(date: Date | null) => setEndDate(date)}
                  placeholderText="End Date"
                  showTimeSelect
                  dateFormat="Pp"
                  required
                />
              </td>
              <td className="px-2 py-1">
                <TextInput
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </td>
              <td className="px-2 py-1">
                <div className="flex gap-2">
                  <Button size="xs" onClick={handleSaveNewDevice}>
                    Lưu
                  </Button>
                  <Button size="xs" color="gray" onClick={() => setIsAdding(false)}>
                    Hủy
                  </Button>
                </div>
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
