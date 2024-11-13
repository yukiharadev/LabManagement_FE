import { Label, TextInput } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface LabData {
  id: number;
  borrower: string;
  role: string;
  department?: string;
  status: string;
  dateRange: string;
  phoneNumber?: string;
  email?: string;
  devices: {
    deviceName?: string;
    deviceQuantity?: number;
    deviceTimeUsed?: number;
    deviceDescription?: string;
  }[];
}

const LabDetailsItem = () => {
  const { id } = useParams<{ id: string }>();

  const [labData, setLabData] = useState<LabData | null>(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`https://api.example.com/lab/${id}`);
    //     const data = await response.json();
    //     setLabData(data);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    // fetchData();
    const labData = {
      id: 1,
      borrower: "Yukihara Sensei",
      role: "Teacher",
      department: "Information Technology",
      status: "Processing",
      dateRange: "30/10/2024 - 1/11/2024",
      phoneNumber: "0333853767",
      email: "nguyenhoang.miyuka@gmail.com",
      devices: [
        {
          deviceName: "Laptop",
          deviceQuantity: 1,
          deviceTimeUsed: 12,
          deviceDescription: "Mai trả",
        },
        {
          deviceName: "Laptop",
          deviceQuantity: 1,
          deviceTimeUsed: 1,
          deviceDescription: "Không trả",
        },
        {
          deviceName: "Server",
          deviceQuantity: 1,
          deviceTimeUsed: 1,
          deviceDescription: "Port 3020",
        },
      ],
    };
    setLabData(labData);
  }, [id]);

  if (labData?.role === "Teacher") {
    return (
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Label>Id</Label>
          <TextInput type="text" value={id} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Họ và tên</Label>
          <TextInput type="text" value={labData.borrower} disabled />
        </div>
        <div className="col-span-1">
          <Label>Email</Label>
          <TextInput type="text" value={labData.email} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Chức vụ</Label>
          <TextInput type="text" value={labData.role} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Phòng ban</Label>
          <TextInput type="text" value={labData.department} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Trạng thái</Label>
          <TextInput type="text" value={labData.status} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Ngày mượn - Kết thúc</Label>
          <TextInput type="text" value={labData.dateRange} disabled readOnly />
        </div>
        <div className="col-span-1">
          <Label>Số điện thoại</Label>
          <TextInput
            type="text"
            value={labData.phoneNumber}
            disabled
            readOnly
          />
        </div>
        <div className={"col-span-4"}>
          <Label>Thiết bị</Label>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
              </tr>
            </thead>
            <tbody>
              {labData.devices.map((device, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {device.deviceName}
                  </th>
                  <td className="py-1 px-2">{device.deviceQuantity}</td>
                  <td className=" py-1 px-2">{device.deviceTimeUsed}</td>
                  <td>
                    <div className="py-1 px-2 ">{device.deviceDescription}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default LabDetailsItem;
