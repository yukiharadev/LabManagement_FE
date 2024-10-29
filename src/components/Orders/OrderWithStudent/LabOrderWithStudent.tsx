import { Datepicker, Label, Textarea } from "flowbite-react";
import DevicesTableOrder from "../DevicesOrder/DevicesTableOrder.tsx";

const LabOrderWithStudent = () => {
  return (
    <div className="grid gap-2 grid-cols-4">
      <div className="col-span-4 my-1">
        <Label value="Lý do" />
        <Textarea
          className="resize-none"
          placeholder="Desciption..."
          required
          rows={4}
        />
      </div>
      <div className="my-1 col-span-2">
        <Label value="Ngày bắt đầu" />
        <Datepicker />
      </div>
      <div className="my-1 col-span-2">
        <Label value="Ngày kết thúc" />
        <Datepicker />
      </div>

      <div className="my-1 col-span-4">
        <DevicesTableOrder />
      </div>
    </div>
  );
};

export default LabOrderWithStudent;
