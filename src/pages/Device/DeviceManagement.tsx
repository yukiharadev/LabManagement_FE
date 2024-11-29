import { useEffect, useState } from "react";
import api from "../../configs/axios.config";
import {
    ACCEPT_BOOKING_DEVICE_URL,
    GET_BOOKING_DEVICE_URL,
    REJECT_BOOKING_DEVICE_URL,
    REMOVE_BOOKING_DEVICE_URL
} from "../../configs/Api.config";
import { Badge, Button } from "flowbite-react";
import { HiCheck, HiEye, HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

type BookingDevice = {
    id: number;
    username: string;
    status: number;
    description: string;
};

const DeviceManagement = () => {
    const [bookingDevices, setBookingDevices] = useState<BookingDevice[]>([]);
const navigation = useNavigate();
    const bookingDevice = async () => {
            try {
                const response = await api.get(GET_BOOKING_DEVICE_URL);
                if (response.status === 200) {
                    setBookingDevices(response.data);
                }
                if (response.status === 404) {
                    toast.error("Not found booking device");
                }
            } catch (error) {
                toast.error("Forbidden");
            }

    };

    const removeBooking = async (id: number) => {
        const response = await api.delete(REMOVE_BOOKING_DEVICE_URL(id));
        if (response.status === 200) {
            toast.success("Remove booking successfully");
            bookingDevice();
        } else {
            toast.error("Remove booking failed");
        }
    }

    const approveBooking = async (id: number) => {
        const response = await api.post(ACCEPT_BOOKING_DEVICE_URL(id));
        if (response.status === 200) {
            toast.success("Accept booking successfully");
            bookingDevice();
        } else {
            toast.error("Accept booking failed");
        }
    };
    const handleView = (id: number) => {
        navigation(`/device-booking/${id}`);
    }

    const rejectBooking = async (id: number) => {
        const response = await api.delete(REJECT_BOOKING_DEVICE_URL(id));
        if (response.status === 200) {
            toast.success("Reject booking successfully");
            bookingDevice();
        } else {
            toast.error("Reject booking failed");
        }
    }

    useEffect(() => {

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
                        <th scope="col" className="px-2 text-center py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bookingDevices.map((booking: BookingDevice) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={booking.id}
                        >
                            <td className="px-2 py-4 whitespace-nowrap">
                                {booking.username}
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex">
                                    {booking.status === 0 ? (
                                        <Badge color="blue">Chờ duyệt</Badge>
                                    ) : booking.status === 1 ? (
                                        <Badge color="warning">Đã duyệt</Badge>
                                    ) : (
                                        <Badge color="red">Từ chối</Badge>
                                    )}
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                {booking.description}
                            </td>
                            <td className="flex justify-center px-2 py-4 whitespace-nowrap">
                                {booking.status == 0 ? (
                                    <Button
                                        onClick={() => approveBooking(booking.id)}
                                        color={"success"}
                                        size="xs"
                                        className="hover:text-white mr-2 py-1 bg-green-100 text-green-500"
                                    >
                                        <HiCheck />
                                    </Button>
                                ) : (
                                    ""
                                )}
                                <Button
                                    onClick={()=>{handleView(booking.id)}}
                                    size="xs"
                                    className="hover:text-white mr-2 py-1 bg-cyan-100 text-cyan-500"
                                >
                                    <HiEye />
                                </Button>
                                {
                                    booking.status === 0 ? (
                                        <Button
                                            onClick={() => rejectBooking(booking.id)}
                                            color={"failure"}
                                            size="xs"
                                            className="rounded-lg py-1 bg-red-100 text-red-500 hover:text-white"
                                        >
                                            <HiOutlineX />
                                        </Button>
                                    ) : <Button
                                        onClick={()=> removeBooking(booking.id)}
                                        color={"failure"}
                                        size="xs"
                                        className="rounded-lg py-1 bg-red-100 text-red-500 hover:text-white"
                                    >
                                        <HiOutlineX />
                                    </Button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceManagement;