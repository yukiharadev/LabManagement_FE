import { Label, TextInput } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../configs/axios.config.tsx";
import { GET_DEVICE_BY_ID_URL, GET_LAB_BY_ID_URL, GET_USER_BY_USERNAME_URL } from "../../configs/Api.config.tsx";

interface LabData {
  id: number;
  username: string;
  startDate: string;
  endDate: string;
  status: number;
  description: string;
  deviceBorrowingDetails: {
    deviceId: number;
    deviceItemId: number;
    description: string;
    startDate: string;
    endDate: string;
  }[];
}
interface Device{
  deviceName:string;
}

interface User {
  fullName: string;
  email: string;
  roles: [string];
}

const LabDetailsItem = () => {
  const { id } = useParams<{ id: string }>();

  const [labData, setLabData] = useState<LabData | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [devices, setDevices] = useState<Device | null>(null);

  useEffect(() => {
    const fetchLabData = async () => {
      const response = await api.get(GET_LAB_BY_ID_URL(id));
      if (response.status === 200) {
        setLabData(response.data);
        const userResponse = await api.get(GET_USER_BY_USERNAME_URL(response.data.username));
        if (userResponse.status === 200) {
          setUser(userResponse.data);
        }

        for (let i = 0; i < response.data.deviceBorrowingDetails.length; i++) {
          const deviceResponse = await api.get(GET_DEVICE_BY_ID_URL(response.data.deviceBorrowingDetails[0].deviceId));
          if (deviceResponse.status === 200) {
            setDevices(deviceResponse.data);
          }
        }
      }
    };

    fetchLabData();
  }, [id]);


  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <Label>Id</Label>
        <TextInput type="text" value={id} disabled readOnly />
      </div>
      <div className="col-span-1">
        <Label>Họ và tên</Label>
        <TextInput type="text" value={user?.fullName || ""} disabled />
      </div>
      <div className="col-span-1">
        <Label>Email</Label>
        <TextInput type="text" value={user?.email || ""} disabled readOnly />
      </div>
      <div className="col-span-1">
        <Label>Chức vụ</Label>
        <TextInput type="text" value={user?.roles.join(", ") || ""} disabled readOnly />
      </div>
      {/*<div className="col-span-1">*/}
      {/*  <Label>Phòng ban</Label>*/}
      {/*  <TextInput type="text" value={""} disabled readOnly />*/}
      {/*</div>*/}
      <div className="col-span-2">
        <Label>Trạng thái</Label>
        <TextInput
          type="text"
          value={labData?.status === 1 ? "Đã duyệt" : labData?.status === 2 ? "Từ chối" : "Chờ duyệt"}
          disabled
          readOnly
        />
      </div>
      <div className="col-span-2">
        <Label>Ngày mượn - Kết thúc</Label>
        <TextInput type="text" value={`${labData?.startDate} - ${labData?.endDate}`} disabled readOnly />
      </div>

      <div className={"col-span-4"}>
        <Label>Thiết bị</Label>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Tên thiết bị
              </th>
              <th scope="col" className="px-2 py-3">
                Thời gian sử dụng
              </th>
              <th scope="col" className="px-2 py-3">
                Ghi chú
              </th>
            </tr>
          </thead>
          <tbody>
            {labData?.deviceBorrowingDetails.map((device, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th scope="row" className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {devices?.deviceName}
                </th>
                <td className=" py-1 px-2">{`${device.startDate} - ${device.endDate}`}</td>
                <td>
                  <div className="py-1 px-2 ">{device.description}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabDetailsItem;