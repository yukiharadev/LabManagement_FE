import { Sidebar } from "flowbite-react";
import SidebarConfig from "../../configs/sidebar.config";
import SidebarItem from "./SideBarItem";
import { HiMenuAlt1 } from "react-icons/hi";

const SideBarMenu = () => {
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className=" absolute z-30 right-24 top-2 mt-5 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:text-blue-400 "
      >
        <HiMenuAlt1 size={23} />
      </button>

      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidebar"
      >
        <Sidebar className="bg-white ">
          <Sidebar.Logo
            img={"https://flowbite.com/docs/images/logo.svg"}
            href={"/"}
          >
            LAB Management
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {SidebarConfig.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
    </>
  );
};

export default SideBarMenu;
