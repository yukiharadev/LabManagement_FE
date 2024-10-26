import { HiInbox, HiShoppingBag, HiUser, HiChartPie } from "react-icons/hi";

const SidebarConfig = [
  {
    title: "Dashboard",
    icon: HiChartPie,
    to: "/",
  },
  {
    title: "Devices",
    icon: HiInbox,
    to: "/devices",
    subMenu: [
      { title: "All Devices", to: "/devices/all" },
      {
        title: "Add Device",
        subMenu: [
          { title: "Device Type", to: "/devices/add/type" },
          { title: "Device Details", to: "/devices/add/details" },
        ],
      },
    ],
  },
  {
    title: "Users",
    icon: HiUser,
    to: "/users",
  },
  {
    title: "Products",
    icon: HiShoppingBag,
    to: "/products",
  },
];
export default SidebarConfig;
