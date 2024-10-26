import { Dropdown } from "flowbite-react";
import { HiBell } from "react-icons/hi";

const NotificationDropdown = () => {
  return (
    <Dropdown
      label={
        <div className="relative mr-4">
          <HiBell size={20} className=" hover:text-blue-500" />
          {}
        </div>
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <div className="flex items-center text-gray-700 font-bold  justify-between">
          <span>Notifications</span>
          <span className="text-xs text-gray-700 font-bold">Mark all read</span>
        </div>
      </Dropdown.Header>
      <Dropdown.Item>
        <div className="flex items-center justify-between">
          <div className="truncate flex-wrap max-w-40">
            New messages received
          </div>
          <span className="text-xs text-gray-400 ml-10 py-2">2 min ago</span>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default NotificationDropdown;
