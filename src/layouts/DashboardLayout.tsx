import SideBarMenu from "../components/SideBar/SideBarMenu.tsx";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/App/AppHeader.tsx";

const DashboardLayout = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      <SideBarMenu />
      <div className="p-4 md:ml-64">
        <AppHeader />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
