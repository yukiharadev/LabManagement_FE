import {useParams} from "react-router-dom";
import api from "../../configs/axios.config.tsx";
import {GET_SERVER_DETAIL_URL, GET_USER_BY_USERNAME_URL} from "../../configs/Api.config.tsx";
import {useEffect, useState} from "react";
import {Badge, Label, Textarea, TextInput} from "flowbite-react";

const ServerDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [serverDetail, setServerDetail] = useState<any>({});
    const [user, setUser] = useState<any>({});

    const getServerDetail = async () => {
        const response = await api.get(GET_SERVER_DETAIL_URL(id));
        if(response.status === 200){
            setServerDetail(response.data);
            const userResponse = await api.get(GET_USER_BY_USERNAME_URL(response.data.username));
            if(userResponse.status === 200){
                setUser(userResponse.data);
            }
        }
    }

    console.log("ServerDetail:", serverDetail);
    console.log("User:", user);
    useEffect(() => {
        if (id) {
            getServerDetail();
        }
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <Label>UserName</Label>
                    <TextInput type="text" value={user?.username || " "} disabled />
                </div>
                <div className="col-span-2">
                    <Label>Họ và tên</Label>
                    <TextInput
                        type="text"
                        value={user?.fullName || " "}
                        disabled
                    />
                </div>
                <div className="col-span-1">
                    <Label>Role</Label>
                    <TextInput type="text" value={user?.roles || " "} disabled readOnly />
                </div>
                <div className="col-span-4">
                    <Label>Email</Label>
                    <TextInput
                        type="email"
                        value={user?.email || ""}
                        disabled
                        readOnly
                    />
                </div>
            </div>
            <Badge color={"blue"} className="font-bold text-xl mt-3">Thông tin Server</Badge>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <Label>Tài khoản</Label>
                    <TextInput type="text" value={serverDetail?.userServer || ""} disabled />
                </div>
                <div className="col-span-1">
                    <Label>Mật khẩu</Label>
                    <TextInput type="text" value={serverDetail?.passServer || ""} disabled readOnly />
                </div>
        </div>

            <div>
                <Label>ServerInfo</Label>
                <Textarea
                    id="serverInfo"
                    value={"Liên hệ với giảng viên qua page của Khoa CNTT để biết thông tin chi tiết"}
                    required
                    rows={4}
                    disabled/>
            </div>
    </div>
    )
}

export default ServerDetail;