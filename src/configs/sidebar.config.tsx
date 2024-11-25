import {
    HiUser,
    HiHome,
    HiDesktopComputer,
    HiServer,
    HiChartBar,
    HiColorSwatch,
} from "react-icons/hi";


const SidebarConfig = [
    {
        title: "Trang chủ",
        icon: HiHome,
        to: "/",
    },
    {
        title: "Quản Lý Thiết bị",
        icon: HiDesktopComputer,
        subMenu: [
            {
                title: "Danh sách thiết bị",
                to: "/devices",
            },
            {
                title: "Danh sách yêu cầu",
                to: "/devices/user-booking",
            },
        ],
    },
    {
        title: "Lịch sử",
        icon: HiChartBar,
        subMenu: [
            {
                title: "Lịch sử mượn thiết bị",
                to: "/history/device",
            },
            {
                title: "Lịch sử mượn phòng Lab",
                to: "/history/lab",
            },
        ],
    },
    {
        title: "Dịch vụ",
        icon: HiServer,
        roles: ["admin", "student", 'lecturer'],
        subMenu: [
            {
                title: "Mượn thiết bị",
                to: "/services/order-device",
            },
            {
                title: "Mượn phòng Lab",
                to: "/services/order-lab",
            }
        ],
    },
    {
        title: "Quản Lý Người dùng",
        icon: HiUser,
        to: "/users",
    },
    {
        title: "Quản Lý Phòng Lab",

        icon: HiColorSwatch,
        to: "/lab",
    },
    {
        title: "Thống kê",
        icon: HiChartBar,
        to: "/statistics",
    },
];
export default SidebarConfig;
