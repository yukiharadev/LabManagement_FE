import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import api from "../../configs/axios.config.tsx";
import {SERVER_BOOKING} from "../../configs/Api.config.tsx";
import {toast} from "react-toastify";

const ServerBooking = () => {
    const [formData, setFormData] = useState({
        username: localStorage.getItem("username") || "",
        userServer: "",
        passServer: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === " ") {
            event.preventDefault();
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Form data submitted:", formData);
        try {
            const response = await api.post(SERVER_BOOKING, formData);
            console.log("response", response);
            if (response.status === 200) {
                toast.success("Đặt máy chủ thành công, Vui lòng chờ xác nhận");
            }
        }catch (error) {
            toast.error("Đặt máy chủ thất bại");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <StudentFormInformation />
            <hr className="my-4" />
            <div>
                <Label htmlFor="userServer">Tên Tài Khoản</Label>
                <TextInput
                    id="userServer"
                    name="userServer"
                    type="text"
                    value={formData.userServer}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Tên tài khoản"
                    required
                />
                <Label htmlFor="passServer">Mật khẩu</Label>
                <TextInput
                    id="passServer"
                    name="passServer"
                    type="password"
                    value={formData.passServer}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Mật khẩu"
                    required
                />
            </div>
            <Button type="submit" color="info" className="mt-2">
                Gửi yêu cầu
            </Button>
        </form>
    );
};

export default ServerBooking;