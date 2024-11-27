import React, { useState } from "react";
import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import { Button, Checkbox, Label, Textarea } from "flowbite-react";
import DevicesTableOrder from "../../components/Orders/DevicesOrder/DevicesTableOrder.tsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BOOKING_LAB_URL } from "../../configs/Api.config.tsx";
import api from "../../configs/axios.config.tsx";
import { toast } from "react-toastify";

const OrderRoom: React.FC = () => {
    const [formData, setFormData] = useState({
        username: localStorage.getItem("username") || "",
        startDate: "",
        description: "",
        endDate: "",
        deviceBorrowingDetails: [],
    });

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            description: value,
        }));
    };

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
        setFormData((prev) => ({
            ...prev,
            startDate: date ? date.toISOString() : "",
        }));
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        setFormData((prev) => ({
            ...prev,
            endDate: date ? date.toISOString() : "",
        }));
    };

    const handleDevicesChange = (devices: any) => {
        setFormData((prev) => ({
            ...prev,
            deviceBorrowingDetails: devices,
        }));
    };

    // Xử lý gửi đơn
    const LabSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        const response = await api.post(BOOKING_LAB_URL, formData);
        console.log("Response:", response);

        if (response.status === 200) {
            toast.success("Đã gửi đơn thành công");
        }
    };

    return (
        <form onSubmit={LabSubmit}>
            <StudentFormInformation />
            <hr className="my-4" />
            <div className="grid grid-cols-4 gap-4">
                <div className=" col-span-2">
                    <DatePicker
                        selected={startDate}
                        className="rounded-lg border border-gray-300"
                        onChange={handleStartDateChange}
                        placeholderText="Start Date"
                        showTimeSelect
                        dateFormat="Pp"
                        required
                    />
                </div>
                <div className="col-span-2">
                    <DatePicker
                        selected={endDate}
                        className="rounded-lg border border-gray-300"
                        onChange={handleEndDateChange}
                        placeholderText="End Date"
                        showTimeSelect
                        dateFormat="Pp"
                        required
                    />
                </div>
            </div>
            <hr className="my-2" />
            <Textarea
                id="comment"
                placeholder="Leave a comment..."
                value={formData.description}
                onChange={handleDescriptionChange}
                required
                rows={4}
            />
            <DevicesTableOrder onChange={handleDevicesChange} />
            <div className="flex items-center my-2">
                <Checkbox id="agree" required />
                <Label className="ml-2" htmlFor="agree">
                    Tôi đồng ý với điều khoản và điều kiện
                </Label>
            </div>
            <div className="flex">
                <Button
                    gradientMonochrome="success"
                    className="mt-2"
                    size="md"
                    type="submit"
                >
                    Gửi đơn
                </Button>
            </div>
        </form>
    );
};

export default OrderRoom;