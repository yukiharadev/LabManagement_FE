import {
    HiUser,
    HiHome,
    HiDesktopComputer,
    HiServer,
    HiShoppingCart,
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
            {
                title: "Lịch sử đăng ký Server",
                to: "/history/server",
            }
        ],
    },
    {
        title: "Dịch vụ",
        icon: HiShoppingCart,
        roles: ["admin", "student", 'lecturer'],
        subMenu: [
            {
                title: "Mượn thiết bị",
                to: "/services/order-device",
            },
            {
                title: "Mượn phòng Lab",
                to: "/services/order-lab",
            },
            {
                title: "Đăng ký tài khoản Server",
                to: "/services/book-server",
            }
        ],
    },
    {
        title: "Quản Lý Phòng Lab",

        icon: HiColorSwatch,
        to: "/lab",
    },
    {
        title: "Quản Lý Server",
        icon: HiServer,
        to: "/server",
    },
    {
        title: "Quản Lý Người dùng",
        icon: HiUser,
        to: "/users",
    },
];
export default SidebarConfig;
