// SidebarItem.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  item: {
    title: string;
    to?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    subMenu?: SidebarItemProps["item"][];
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = location.pathname === item.to; // Kiểm tra nếu mục đang active

  return (
    <div>
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer ${
          item.subMenu ? "justify-between" : "justify-start"
        } hover:bg-gray-100`}
        onClick={item.subMenu ? handleToggle : undefined}
      >
        {item.icon && (
          <item.icon
            className={`w-6 h-6 ${isActive ? "text-blue-600" : "text-gray-500"}`}
          />
        )}
        <Link
          to={item.to!}
          className={`ml-3 ${
            isActive ? "text-blue-700" : "text-gray-500"
          } hover:text-blue-600`}
        >
          {item.title}
        </Link>
        {item.subMenu && (
          <span className="ml-auto text-gray-500">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>
      {isOpen && item.subMenu && (
        <div className="ml-4">
          {item.subMenu.map((subItem, index) => (
            <SidebarItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
