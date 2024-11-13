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
    to: "/devices",
  },
  {
    title: "Dịch vụ",
    icon: HiServer,
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
