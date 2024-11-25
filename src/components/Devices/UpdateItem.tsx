import { Button, Drawer, Label, Select, Textarea, TextInput } from "flowbite-react";
import { HiCog, HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";
import { toast } from "react-toastify";
import { UPDATE_DEVICE_ITEM_URL } from "../../configs/Api.config";
import api from "../../configs/axios.config";


interface props {
    id: number;
    deviceItemId: number;
    data: {
        deviceItemName: string;
        deviceItemStatus: number;
        description: string;
    }
    onItemCreated: () => void;
}


const UpdateItem = (props: props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [deviceName, setDeviceName] = useState(props.data.deviceItemName);
    const [deviceItemStatus, setDeviceItemStatus] = useState(props.data.deviceItemStatus);
    const [description, setDescription] = useState(props.data.description);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const deviceData = {
            deviceItemName: deviceName,
            deviceItemStatus,
            description,
        };
        const response = await api.put(UPDATE_DEVICE_ITEM_URL(props.id, props.deviceItemId), deviceData);
        if (response.status === 200) {
            console.log("onItemCreated", props.onItemCreated);
            props.onItemCreated();
            toast.success("Cập nhật thiết bị thành công");

        } else {
            toast.error("Cập nhật thiết bị thất bại");
        }
        handleClose();
        console.log("response", response);

    };

    const handleClose = () => setIsOpen(false);
    return (
        <>
            <Button size="xs" onClick={() => setIsOpen(true)}>
                <HiOutlinePencil />
            </Button>
            <Drawer
                open={isOpen}
                className="md:w-1/2 w-full"
                onClose={handleClose}
                position="right"
            >
                <Drawer.Header
                    title="Update thiết bị"
                    titleIcon={() => <HiCog className="w-6 h-6 mr-2" />}
                />
                <Drawer.Items>
                    <form className="w-full" onSubmit={handleSubmit} >
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
                                Cập nhật
                            </Button>
                        </div>
                    </form>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default UpdateItem;