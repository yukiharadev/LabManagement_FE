import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchAllDevices } from "../../features/Devices/DeviceAction";
import CreateDevice from "./CreateDevice";
import { Button } from "flowbite-react";
import { HiEye, HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../configs/axios.config.tsx";
import { DELETE_DEVICE_URL } from "../../configs/Api.config.tsx";

const DevicesTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = localStorage.getItem("userdata");
    const { data: devices, error } = useSelector(
        (state: RootState) => state.device,
    );

    useEffect(() => {
        dispatch(fetchAllDevices() as never);

        if (error) {
            console.error("Error fetching devices:", error);
        }
    }, [dispatch, error]);

    const handleDelete = async (id: number) => {
        try {
            const res = await api.delete(DELETE_DEVICE_URL(id));
            if (res.status === 204) {
                toast.success("Xóa thiết bị thành công");
                dispatch(fetchAllDevices() as never);
            }
        } catch (error) {
            console.error("Error deleting device:", error);
        }
    };

    const handleView = (id: number) => {
        navigate(`/device/${id}`);
    };

    return (
        <div className="mt-2 sm:rounded-lg">
            <div className="my-2 flex justify-between">
                <h1 className="text-2xl">Danh sách thiết bị</h1>
                {
                    userData && JSON.parse(userData).roles.includes("admin")  ?(<CreateDevice />): ""
                }
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-2 py-3">
                            Tên thiết bị
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Số lượng
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Loại thiết bị
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {devices && devices.length > 0 ? (
                        devices.map((device) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={device.id}
                            >
                                <td className="px-2 py-4 whitespace-nowrap">
                                    {device.deviceName}
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">{device.total}</td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    {device.categoryName}
                                </td>
                                <td className="flex justify-start px-2 py-4 whitespace-nowrap">
                                    <Button
                                        onClick={() => handleView(device.id)}
                                        size="xs"
                                        className=" hover:text-white mx-2 py-1 bg-cyan-100 text-cyan-500 "
                                    >
                                        <HiEye />
                                    </Button>
                                    {
                                        userData && JSON.parse(userData).role === "admin" ? (
                                            <Button
                                                onClick={() => handleDelete(device.id)}
                                                size="xs"
                                                className=" hover:text-white mx-2 py-1 bg-red-100 text-red-500 "
                                            >
                                                <HiOutlineX />
                                            </Button>
                                        ) : ""
                                    }
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center py-4">
                                No devices found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DevicesTable;