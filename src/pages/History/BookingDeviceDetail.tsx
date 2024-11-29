import {Label, Textarea, TextInput} from "flowbite-react";
import { useParams } from "react-router-dom";
import api from "../../configs/axios.config.tsx";
import {
    GET_BOOKING_DEVICE_BY_ID_URL,
    GET_DEVICE_BY_ID_URL,
    GET_USER_BY_USERNAME_URL
} from "../../configs/Api.config.tsx";
import { useEffect, useState } from "react";

interface BookingDevice {
    id: number;
    username: string;
    status: number;
    description: string;
    groupStudents: {
        studentId: string;
        lecturerId: string;
    }[];
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
    roles: string[];
}

const BookingDeviceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [bookingDevice, setBookingDevice] = useState<BookingDevice | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [devices, setDevices] = useState<Device | null>(null);
    const getBookingDeviceDetail = async () => {
        try {
            const response = await api.get(GET_BOOKING_DEVICE_BY_ID_URL(id));
            if (response.status === 200) {
                setBookingDevice(response.data);
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
        } catch (error) {
            console.error("Error fetching booking device data:", error);
        }
    }

    useEffect(() => {
        getBookingDeviceDetail();
    }, [id]);

    console.log("bookingDevice", bookingDevice);
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
                <Label>Id</Label>
                <TextInput type="text" value={id || ""} disabled readOnly />
            </div>
            <div className="col-span-1">
                <Label>Họ và tên</Label>
                <TextInput type="text" value={user?.fullName || ""} disabled />
            </div>
            <div className="col-span-2">
                <Label>Email</Label>
                <TextInput type="text" value={user?.email || ""} disabled readOnly />
            </div>
            <div className="col-span-1">
                <Label>Chức vụ</Label>
                <TextInput type="text" value={user?.roles.join(", ") || ""} disabled readOnly />
            </div>
            <div className="col-span-1">
                <Label>Trạng thái</Label>
                <TextInput type="text" value={
                    bookingDevice?.status === 0 ? "Chờ duyệt" :
                        bookingDevice?.status === 1 ? "Đã duyệt" : "Từ chối"
                } disabled readOnly />
            </div>
            <div className={"col-span-2"}>
                <Label>Mô tả</Label>
                <Textarea
                    value={bookingDevice?.description || ""}
                    disabled
                />
            </div>
            {bookingDevice?.groupStudents.map((group, index) => (

            <div className="col-span-2">
                <Label>Thông tin sinh viên</Label>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Mã sinh viên
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Mã giảng viên
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td className="px-2 py-4 whitespace-nowrap">
                                {group.studentId}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                {group.lecturerId}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ))}
            <div className={"col-span-2"}>
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
                        {bookingDevice?.deviceBorrowingDetails.map((device, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th scope="row"
                                    className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    {devices?.deviceName}
                                </th>
                                <td className=" py-1 px-2">{`${device.startDate} - ${device.endDate} `}</td>
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
}

export default BookingDeviceDetail;