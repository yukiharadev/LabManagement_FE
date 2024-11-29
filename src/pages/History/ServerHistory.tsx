import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {DELETE_SERVER_BOOKING, GET_SERVER_HISTORY_URL} from "../../configs/Api.config.tsx";
import api from "../../configs/axios.config.tsx";
import { toast } from "react-toastify";
import { Button } from "flowbite-react";
import { HiEye, HiOutlineX } from "react-icons/hi";

const ServerHistory = () => {
    const [serverData, setServerData] = useState([]);
    const navigation = useNavigate();

    const userName = localStorage.getItem("username") || "";


    const getServerData = async () => {
        const response = await api.get(GET_SERVER_HISTORY_URL(userName));
        if (response.status === 200) {
            setServerData(response.data);
        }

        if (response.status === 403) {
            navigation("/forbidden");
            toast.error("Forbidden Error");
        }
    };

    const handleView = (id: number) => {
        navigation(`/server/${id}`);
    };

    const deleteBooking = async (id: number) => {
        const response = await api.delete(DELETE_SERVER_BOOKING(id));
        if (response.status === 200) {
            toast.success("Delete booking successfully");
            getServerData();
        } else {
            toast.error("Delete booking failed");
        }
    };

    useEffect(() => {
        getServerData();
    }, []);

    console.log(serverData);

    return (
        <div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="text-center py-1 px-2">
                                ID
                            </th>
                            <th scope="col" className="text-center py-1 px-2">
                                Người mượn
                            </th>
                            <th scope="col" className="text-center py-1 px-2">
                                Status
                            </th>
                            <th scope="col" className="py-1 px-2 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {serverData.length > 0 ? serverData.map((booking: any) => (
                            <tr
                                key={booking.userId}
                                className="bg-gray-50 dark:bg-gray-700"
                            >
                                <td className="py-3 px-2 text-center">{booking.userId}</td>
                                <td className="py-3 px-2 text-center">{booking.username}</td>
                                <td className="py-3 px-2 text-center">
                                    {booking.isApproved === false ? "Chưa duyệt" : "Đã duyệt"}
                                </td>
                                <td className="py-3 px-2 text-center">
                                    <div className="flex gap-2 px-1 py-2 justify-center">
                                        <Button
                                            size="xs"
                                            onClick={() => handleView(booking.userId)}
                                            className="hover:text-white py-1 bg-cyan-100 text-cyan-500"
                                        >
                                            <HiEye />
                                        </Button>
                                        <Button
                                            color={"failure"}
                                            size="xs"
                                            onClick={() => deleteBooking(booking.userId)}
                                            className="rounded-lg py-1 bg-red-100 text-red-500 hover:text-white"
                                        >
                                            <HiOutlineX />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={5} className="text-center py-2">Không có dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServerHistory;