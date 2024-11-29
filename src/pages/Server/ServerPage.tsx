import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APPROVE_SERVER_BOOKING, DELETE_SERVER_BOOKING, GET_SERVER_BOOKING } from "../../configs/Api.config.tsx";
import api from "../../configs/axios.config.tsx";
import { toast } from "react-toastify";
import { Button } from "flowbite-react";
import { HiCheck, HiEye, HiOutlineX } from "react-icons/hi";

const ServerPage = () => {
    const [serverData, setServerData] = useState([]);
    const navigation = useNavigate();

    const userData = localStorage.getItem("userdata");

    const getServerData = async () => {
        const response = await api.get(GET_SERVER_BOOKING);
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

    const approveBooking = async (id: number) => {
        const response = await api.put(APPROVE_SERVER_BOOKING(id));
        if (response.status === 200) {
            toast.success("Accept booking successfully");
            getServerData();
        } else {
            toast.error("Accept booking failed");
        }
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
        <>
            {userData && JSON.parse(userData).roles.includes("admin") ? (
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
                                        key={booking.id}
                                        className="bg-gray-50 dark:bg-gray-700"
                                    >
                                        <td className="py-3 px-2 text-center">{booking.id}</td>
                                        <td className="py-3 px-2 text-center">{booking.username}</td>
                                        <td className="py-3 px-2 text-center">
                                            {booking.isApproved === false ? "Chưa duyệt" : "Đã duyệt"}
                                        </td>
                                        <td className="py-3 px-2 text-center">
                                            <div className="flex gap-2 px-1 py-2 justify-center">
                                                <Button
                                                    size="xs"
                                                    onClick={() => handleView(booking.id)}
                                                    className="hover:text-white py-1 bg-cyan-100 text-cyan-500"
                                                >
                                                    <HiEye />
                                                </Button>
                                                {booking.isApproved === false && (
                                                    <Button
                                                        onClick={() => approveBooking(booking.id)}
                                                        color={"success"}
                                                        size="xs"
                                                        className="hover:text-white py-1 bg-green-100 text-green-500"
                                                    >
                                                        <HiCheck />
                                                    </Button>
                                                )}
                                                <Button
                                                    color={"failure"}
                                                    size="xs"
                                                    onClick={() => deleteBooking(booking.id)}
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
            ) : (navigation("/forbidden"), toast.error("Forbidden Error"))}
        </>
    );
};

export default ServerPage;