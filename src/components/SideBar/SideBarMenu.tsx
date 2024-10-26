// SideBarMenu.tsx
import { Sidebar } from "flowbite-react";
import SidebarConfig from "../../configs/sidebar.config";
import SidebarItem from "./SideBarItem";

const SideBarMenu = () => {
  return (
    <Sidebar className="bg-white">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {SidebarConfig.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBarMenu;
