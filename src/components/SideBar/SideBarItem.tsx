import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setSidebarTitle } from "../../features/Slidebar/SidebarSlice.tsx";

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
  const location = useLocation();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = location.pathname === item.to;

  useEffect(() => {
    if (isActive) {
      dispatch(setSidebarTitle(item.title));
    }
  }, [isActive, dispatch, item.title]);

  return (
    <div>
      <Link
        to={item.to! || "#"}
        className={`flex items-center p-2 ${
          isActive ? "bg-cyan-600 text-white" : "bg-white"
        } my-1 rounded-lg cursor-pointer hover:text-white hover:bg-cyan-600 ${
          item.subMenu ? "justify-between" : "justify-start"
        }`}
        onClick={item.subMenu ? handleToggle : undefined}
      >
        {item.icon && (
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500">
            <item.icon className="h-5 w-5" />
          </div>
        )}
        <span className={`ml-3 ${isActive ? "text-white" : ""}`}>
          {item.title}
        </span>
        {item.subMenu && (
          <span className="ml-auto text-gray-500">
            {isOpen ? <HiChevronUp /> : <HiChevronDown />}
          </span>
        )}
      </Link>
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
