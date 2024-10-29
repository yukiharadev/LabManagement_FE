import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import LabOrderWithStudent from "../../components/Orders/OrderWithStudent/LabOrderWithStudent.tsx";
import { Button } from "flowbite-react";

const OrderRoom = () => {
  return (
    <form>
      <StudentFormInformation />
      <LabOrderWithStudent />
      <Button
        gradientMonochrome="success"
        className="mt-4"
        size="md"
        type="submit"
      >
        Gửi đơn
      </Button>
    </form>
  );
};

export default OrderRoom;
