import { Badge, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiEye, HiOutlineX } from "react-icons/hi";
import api from "../../configs/axios.config";
import { LAB_HISTORY_URL} from "../../configs/Api.config";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const LabHistory = () => {
    const [bookingDevices, setBookingDevices] = useState([]);
    const username = localStorage.getItem("username") || "";
    const navigate = useNavigate();

    const bookingLab = async () => {
        const response = await api.get(LAB_HISTORY_URL(username));
        if (response.status === 200) {
            setBookingDevices(response.data);
        }
    }
    useEffect(() => {

        if (username) {
            bookingLab();
        } else {
            console.error("Username is null");
        }
    }, []);

    const handleView = (id: number) => {
        navigate(`/lab/${id}`);
    }

    const deleteBooking = async (id: number) => {
        const response = await api.delete(`/LabBorrowingRequests/${id}`);
        if (response.status === 200) {
            toast.success("Delete booking successfully");
            bookingLab();
        } else {
            toast.error("Delete booking failed");
        }
    }


    return (
        <div className="mt-2 sm:rounded-lg">
            <div className="my-2 flex justify-between">
                <h1 className="text-2xl">Lịch sử đơn mượn</h1>
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
                {bookingDevices.length > 0 ? bookingDevices.map((booking: any) => (
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
                                    booking.status === 0 ?
                                        <Badge color="blue">Chờ duyệt</Badge> : booking.status === 1 ?
                                            <Badge color="warning">Đã duyệt</Badge> : <Badge color="red">Từ chối</Badge>
                                }
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            {booking.description}
                        </td>
                        <td className="flex justify-start px-2 py-4 whitespace-nowrap">
                            <Button
                                onClick={() => handleView(booking.id)}
                                size="xs"
                                className=" hover:text-white mr-2 py-1 bg-cyan-100 text-cyan-500 "
                            >
                                <HiEye/>
                            </Button>
                            <Button
                                color={"failure"}
                                size="xs"
                                onClick={() => {
                                    deleteBooking(booking.id)
                                }}
                                className=" rounded-lg py-1 bg-red-100 text-red-500 hover:text-white "
                            >
                                <HiOutlineX/>
                            </Button>
                        </td>
                    </tr>
                )) : <td colSpan={4} className="text-center py-4">
                    No devices found.
                </td>}

                </tbody>
            </table>
        </div>
    );
};

export default LabHistory;
