import CreateUserForm from "./CreateUserForm.tsx";
import { useEffect, useState } from "react";
import api from "../../configs/axios.config.tsx";
import { APPROVE_USER, GET_ALL_USERS } from "../../configs/Api.config.tsx";
import { Badge, Button, Select } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import EditUserDrawer from "./EditUserDrawer.tsx";
import DeleteUserModel from "./DeleteUserModel.tsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface User {
    fullName: string;
    username: string;
    email: string;
    roles: [string];
    status: string;
    avatar: string;
}

const UserListTable = () => {
    const [userList, setUserList] = useState<User[]>([]);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const navigator = useNavigate();

    const getUserList = async () => {
        try {
            const response = await api.get(GET_ALL_USERS)
            const data = await response.data;
            setUserList(data);
        } catch (error) {
            navigator("/forbidden");
            toast.error("Error");
        }
    };
    useEffect(() => {
        getUserList();
    }, []);

    const handleRoleChange = async (role: string) => {
        if (selectedUser) {
            try {
                const res = await api.put(APPROVE_USER(selectedUser, role));
                if (res.status === 200) {
                    window.location.reload();
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    const handleRoleSelect = (username: string) => {
        setSelectedUser(username);
        setSelectedRole(null);
    };

    return (
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
            <div className=" pt-3 flex justify-between">
                <span className=" flex items-center text-xl font-bold">
                    {" "}
                    Thông tin người dùng{" "}
                </span>
                <CreateUserForm onCreated={getUserList} />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.username}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{user.fullName}</div>
                                    <div className="font-normal text-gray-500">{user.username}</div>
                                </div>
                            </th>
                            <td className=" px-6 py-4">
                                <div className="flex">
                                    <Badge color={
                                        user.roles[0] === "admin" ? "blue" :
                                            user.roles[0] === "student" ? "cyan" :
                                                user.roles[0] === "lecturer" ? "yellow" :
                                                    "gray"
                                    }>
                                        {user.roles[0].toUpperCase()}
                                    </Badge>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex">
                                    {
                                        user.roles.includes("user") ? (
                                            <Badge color={"info"}>Pending</Badge>
                                        ) : (
                                            <Badge color={"success"}>Active</Badge>
                                        )
                                    }
                                </div>
                            </td>
                            <td className=" py-4 justify-end">
                                <div className="flex justify-center ">
                                    {user.roles.includes("user") && (
                                        <div className="mr-2">
                                            <Button
                                                size={"xs"}
                                                gradientMonochrome="info"
                                                className="py-1 hover:text-white focus:outline-none focus:ring-0 "
                                                onClick={() => handleRoleSelect(user.username)}
                                            >
                                                <HiCheck />
                                            </Button>
                                        </div>
                                    )}
                                    {selectedUser === user.username && (
                                        <Select
                                            onChange={(e) => handleRoleChange(e.target.value)}
                                            value={selectedRole || ""}
                                            className="absolute z-10"
                                        >
                                            <option value="" disabled>Select role</option>
                                            <option value="admin">Admin</option>
                                            <option value="lecturer">Lecturer</option>
                                            <option value="student">Student</option>
                                        </Select>
                                    )}
                                    <EditUserDrawer />
                                    <DeleteUserModel userName={user.username} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserListTable;