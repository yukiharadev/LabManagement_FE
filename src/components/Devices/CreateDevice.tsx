import { useDispatch } from "react-redux";
import { fetchAllDevices } from "../../features/Devices/DeviceAction";
import React, { useState } from "react";
import axios from "axios";
import { Button, Drawer, Label, Select, TextInput } from "flowbite-react";
import { HiCog } from "react-icons/hi";

const CreateDevice = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [category, setCategory] = useState(1);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deviceData = {
      deviceName,
      categoryId: category,
    };
    try {
      await axios.post("http://localhost:5007/api/devices/create", deviceData);
      dispatch(fetchAllDevices() as never);
      handleClose();
    } catch (error) {
      console.error("Error posting device data:", error);
    }
  };

  return (
    <>
      <Button size="xs" onClick={() => setIsOpen(true)}>
        Thêm mới
      </Button>
      <Drawer
        open={isOpen}
        className="md:w-1/2 w-full"
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header
          title="Thêm thiết bị"
          titleIcon={() => <HiCog className="w-6 h-6 mr-2" />}
        />
        <Drawer.Items>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="mx-2 col-span-2 md:col-span-1 ">
                <Label value="Tên thiết bị" />
                <TextInput
                  type="text"
                  placeholder="Tên thiết bị"
                  required
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                />
              </div>
              <div className="mx-2 col-span-2 md:col-span-1">
                <Label className="my-3" value="Loại" />
                <Select
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                >
                  <option value={1}>Cơ sở vật chất</option>
                  <option value={2}>Nữ</option>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mr-2 mt-4">
              <Button
                color="info"
                className="ml-2 focus:outline-none focus:ring-0"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CreateDevice;
