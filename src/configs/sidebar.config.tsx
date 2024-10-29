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
      {
        title: "Teacher Phòng -Check-",
        to: "/services/demo-teacher-devices",
      },
      {
        title: "More Lab OverTime",
        to: "/services/more-lab-overtime",
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
