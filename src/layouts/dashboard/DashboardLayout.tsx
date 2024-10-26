import SideBarMenu from "../../components/SideBar/SideBarMenu";
import BreadcurmbHeader from "../../components/App/BreadcurmbHeader.tsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div className=" h-full">
        <SideBarMenu />
      </div>
      <div className="flex flex-col w-full mr-3 h-full">
        <div className="h-24">
          <BreadcurmbHeader />
        </div>
        <div className=" px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
