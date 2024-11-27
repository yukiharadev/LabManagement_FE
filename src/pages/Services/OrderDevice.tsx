import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import DevicesTableOrder from "../../components/Orders/DevicesOrder/DevicesTableOrder.tsx";
import StudentGroup from "../../components/Orders/OrderWithStudent/StudentsGroup.tsx";
import { Button, Checkbox, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import api from "../../configs/axios.config.tsx";
import { BOOKING_DEVICE_URL } from "../../configs/Api.config.tsx";
import { toast } from "react-toastify";

const OrderDevice = () => {
  const [formData, setFormData] = useState({
    username: localStorage.getItem("username") || "",
    description: "",

    groupStudents: [],
    deviceBorrowingDetails: [],
  });

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleStudentGroupChange = (students: any) => {
    setFormData((prev) => ({
      ...prev,
      groupStudents: students,
    }));
  };

  const handleDevicesChange = (devices: any) => {
    setFormData((prev) => ({
      ...prev,
      deviceBorrowingDetails: devices,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(BOOKING_DEVICE_URL, formData);
      console.log("Response:", response);
      if (response.status === 200) {
        toast.success("Đã gửi đơn thành công");
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <StudentFormInformation />
      <hr className="my-4" />
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        value={formData.description}
        onChange={handleDescriptionChange}
        required
        rows={4}
      />

      <StudentGroup onChange={handleStudentGroupChange} />
      <DevicesTableOrder onChange={handleDevicesChange} />
      <div className="flex items-center my-2">
        <Checkbox id="agree" defaultChecked={true} />
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

export default OrderDevice;
