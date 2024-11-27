import { useEffect, useState } from "react";
import api from "../../configs/axios.config";
import { GET_BOOKING_DEVICE_URL } from "../../configs/Api.config";
import { Badge, Button } from "flowbite-react";
import { HiEye, HiOutlineX } from "react-icons/hi";

const DeviceManagement = () => {
    const [bookingDevices, setBookingDevices] = useState([]);

    useEffect(() => {
        const bookingDevice = async () => {
            const response = await api.get(GET_BOOKING_DEVICE_URL);
            if (response.status === 200) {
                setBookingDevices(response.data);
            }
        }
        bookingDevice();

    }, []);

    console.log("bookingDevices", bookingDevices);



    return (
        <div className="mt-2 sm:rounded-lg">
            <div className="my-2 flex justify-between">
                <h1 className="text-2xl">Danh sách đơn mượn</h1>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-2 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bookingDevices.map((booking: any) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={booking.id}
                        >
                            <td className="px-2 py-4 whitespace-nowrap">
                                {booking.username}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex">
                                    {
                                        booking.status === 0 ? <Badge color="blue">Chờ duyệt</Badge> : booking.status === 1 ? <Badge color="warning">Đã duyệt</Badge> : <Badge color="red">Từ chối</Badge>
                                    }
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                {booking.description}
                            </td>
                            <td className="flex justify-start px-2 py-4 whitespace-nowrap">
                                <Button
                                    onClick={() => { }}
                                    size="xs"
                                    className=" hover:text-white mr-2 py-1 bg-cyan-100 text-cyan-500 "
                                >
                                    <HiEye />
                                </Button>
                                <Button
                                    color={"failure"}
                                    size="xs"
                                    onClick={() => { }}
                                    className=" rounded-lg py-1 bg-red-100 text-red-500 hover:text-white "
                                >
                                    <HiOutlineX />
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default DeviceManagement;