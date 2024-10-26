import { Breadcrumb } from "flowbite-react";
import { HiMenu } from "react-icons/hi";
import NotificationDropdown from "../Notifications/NotificationDropdown.tsx";
import AvatarDropdown from "../Avatar/AvatarDropdown.tsx";

const BreadcurmbHeader = () => {
  return (
    <div className="ml-4 flex justify-between py-5 px-10 bg-gray-100  h-24 rounded-2xl">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <span className="font-bold">Page</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="font-bold">Dashboard</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-2xl mt-2 font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <HiMenu size={20} className="mr-4 hover:text-blue-500" />
        <NotificationDropdown />
        <AvatarDropdown />
      </div>
    </div>
  );
};

export default BreadcurmbHeader;
