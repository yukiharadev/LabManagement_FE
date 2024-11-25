import { Button, Drawer, Label, Select, Textarea, TextInput } from "flowbite-react";
import { HiCog } from "react-icons/hi";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../configs/axios.config.tsx";
import { CREATE_DEVICE_ITEM_URL } from "../../configs/Api.config.tsx";

interface props {
  id: number;
  onItemCreated: () => void;
}

const CreateDeviceItem = (props: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [deviceItemStatus, setDeviceItemStatus] = useState(0);
  const [description, setDescription] = useState("");

  const handleClose = () => setIsOpen(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deviceData = {
      deviceItemName: deviceName,
      deviceItemStatus,
      description,
    };
    const response = await api.post(CREATE_DEVICE_ITEM_URL(props.id), deviceData);
    if (response.status === 200) {
      console.log("onItemCreated", props.onItemCreated);
      props.onItemCreated();
      toast.success("Thêm thiết bị thành công");

    } else {
      toast.error("Thêm thiết bị thất bại");
    }
    handleClose();
    console.log("response", response);
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
                <Label className="my-3" value="Tình trạng" />
                <Select
                  value={deviceItemStatus}
                  onChange={(e) => setDeviceItemStatus(Number(e.target.value))}
                >
                  <option value={0}>Hỏng hóc</option>
                  <option value={1}>Đang hoạt động</option>
                  <option value={2}>Đang được mượn</option>
                </Select>
              </div>
              <div className="mx-2 col-span-2">
                <Label value="Mô tả" />
                <Textarea
                  placeholder="Mô tả"
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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

export default CreateDeviceItem;
