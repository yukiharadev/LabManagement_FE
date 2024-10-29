import TeacherFormInformation from "../../components/Orders/OrderWithTeacher/TeacherFormInformation.tsx";

import DevicesTableOrder from "../../components/Orders/DevicesOrder/DevicesTableOrder.tsx";
import { Button } from "flowbite-react";

const DemoOrderTeacher = () => {
  return (
    <form>
      <TeacherFormInformation />
      <DevicesTableOrder />
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

export default DemoOrderTeacher;
