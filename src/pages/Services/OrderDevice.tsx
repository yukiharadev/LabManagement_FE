import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import DevicesTableOrder from "../../components/Orders/DevicesOrder/DevicesTableOrder.tsx";
import StudentGroup from "../../components/Orders/OrderWithStudent/StudentsGroup.tsx";
import { Button, Checkbox, Label } from "flowbite-react";

const OrderDevice = () => {
  return (
    <form>
      <StudentFormInformation />
      <StudentGroup />
      <DevicesTableOrder />
      <div className="flex items-center my-2 ">
        <Checkbox id="agree" />
        <Label className="ml-2" htmlFor="agree">
          Tôi đồng ý với điều khoản và điều kiện
        </Label>
      </div>
      <div className="flex ">
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
