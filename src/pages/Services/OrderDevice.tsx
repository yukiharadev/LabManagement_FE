import StudentFormInformation from "../../components/Orders/OrderWithStudent/StudentFormInformation.tsx";
import DevicesTableOrder from "../../components/Orders/DevicesOrder/DevicesTableOrder.tsx";
import StudentGroup from "../../components/Orders/OrderWithStudent/StudentsGroup.tsx";

const OrderDevice = () => {
  return (
    <form>
      <StudentFormInformation />
      <StudentGroup />
      <DevicesTableOrder />
    </form>
  );
};

export default OrderDevice;
