import { Avatar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { GET_USER_BY_USERNAME_URL } from "../../configs/Api.config.tsx";
import axios from "axios";
import { toast } from "react-toastify";

interface User {
    fullName: string;
    email: string;
    username: string;
    avatar: string;
    roles: [string];
    dateOfBirth: string;
    gender: string;
}

const AvatarDropdown = () => {
    const navigator = useNavigate();
    const [user, setUser] = useState<User>();

    const userName = localStorage.getItem("username");

    useMemo(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(GET_USER_BY_USERNAME_URL(userName), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")?.replace(/"/g, "") || ""}`,
                    },
                });
                setUser(response.data);
                localStorage.setItem("userdata", JSON.stringify(response.data));
                toast.success("Login Success");
            } catch (error) {
                toast.error("Không thể lấy thông tin người dùng");
                toast.error("Vui lòng chờ phê duyệt tài khoản và đăng nhập lại");
                handleLogout();
                console.log("Error getting user data:", error);
            }
        };
        getUser();
    }, [userName, navigator]);


    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.dispatchEvent(new Event("storage"));
        navigator("/auth");
    };

    return (
        <Dropdown
            label={
                <Avatar
                    img="https://flowbite.com/docs/images/logo.svg"
                    size={"sm"}
                    rounded
                    bordered
                    color={"blue"}
                />
            }
            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">{user?.fullName}</span>
                <span className="block truncate text-sm font-medium">{user?.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Profiles</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
    );
};

export default AvatarDropdown;