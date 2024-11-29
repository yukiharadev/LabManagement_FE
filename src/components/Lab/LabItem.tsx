import { HiCheck, HiEye, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "flowbite-react";
import api from "../../configs/axios.config.tsx";
import { APPROVE_LAB_URL, GET_USER_BY_USERNAME_URL } from "../../configs/Api.config.tsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface LabItemsProps {
    id: number;
    username: string;
    startDate: string;
    endDate: string;
    status: number;
    onApprove?: () => void;
}

interface User {
    fullName: string;
    roles: string[];
}

const LabItems = ({ id, username, startDate, status, endDate, onApprove }: LabItemsProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    const approveBooking = async (id: number) => {
        const response = await api.post(APPROVE_LAB_URL(id));
        if (response.status === 200) {
            toast.success("Accept booking successfully");
            if (onApprove) {
                onApprove();
            }
        } else {
            toast.error("Accept booking failed");
        }
    };

    const handleView = () => {
        navigate(`/lab/${id}`);
    };
    const getUserByUserName = async () => {
        const response = await api.get(GET_USER_BY_USERNAME_URL(username));
        if (response.status === 200) {
            setUser(response.data);
        }
    };

    useEffect(() => {
        getUserByUserName();
    }, []);

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
                scope="row"
                className="px-1 py-2 text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
                {id}
            </th>
            <th
                scope="row"
                className="px-1 py-2 text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
                {user?.fullName}
            </th>
            <td className="px-1 py-2 text-center">{user?.roles.join(", ")}</td>
            <td className="px-1 py-4 flex justify-center items-center ">
                {status === 1 ? (
                    <Badge color="success">Đã duyệt</Badge>
                ) : status === 2 ? (
                    <Badge color="failure">Từ chối</Badge>
                ) : (
                    <Badge color="warning">Chờ duyệt</Badge>
                )}
            </td>
            <td className="px-1 py-2 text-center">{startDate} - {endDate}</td>
            <td>
                <div className="flex gap-2 px-1 py-2 justify-center">
                    <Button
                        size="xs"
                        onClick={handleView}
                        className="hover:text-white py-1 bg-cyan-100 text-cyan-500"
                    >
                        <HiEye />
                    </Button>
                    {status === 0 && (
                        <Button
                            onClick={() => approveBooking(id)}
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
                        className="rounded-lg py-1 bg-red-100 text-red-500 hover:text-white"
                    >
                        <HiOutlineX />
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default LabItems;