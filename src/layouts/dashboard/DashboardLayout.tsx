import SideBarMenu from "../../components/SideBar/SideBarMenu.tsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBarMenu />
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
