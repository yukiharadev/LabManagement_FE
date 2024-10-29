import { HiUser, HiHome, HiDesktopComputer, HiServer } from "react-icons/hi";

const SidebarConfig = [
  {
    title: "Trang chủ",
    icon: HiHome,
    to: "/",
  },
  {
    title: "Thiết bị",
    icon: HiDesktopComputer,
    to: "/devices",
  },
  {
    title: "Dịch vụ",
    icon: HiServer,
    subMenu: [
      {
        title: "Đặt thiết bị",
        to: "/services/order-device",
      },
      {
        title: "Đặt phòng Lab",
        to: "/services/order-lab",
      },
      {
        title: "Lich sử",
        to: "/services/history",
      },
    ],
  },
  {
    title: "Quản Lý Người dùng",
    icon: HiUser,
    to: "/users",
  },
  {
    title: "Quản Lý Phòng Lab",
    icon: HiServer,
    to: "/lab",
  },
];
export default SidebarConfig;
