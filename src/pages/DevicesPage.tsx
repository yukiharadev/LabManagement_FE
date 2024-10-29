import DevicesTable from "../components/Devices/DevicesTable.tsx";
import { Button } from "flowbite-react";

const DevicesPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Danh sách thiết bị</h1>
        <Button gradientMonochrome="success" size="xs">
          Thêm mới
        </Button>
      </div>
      <DevicesTable />
    </div>
  );
};

export default DevicesPage;
