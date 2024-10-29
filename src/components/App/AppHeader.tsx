import NotificationDropdown from "../Notifications/NotificationDropdown";
import AvatarDropdown from "../Avatar/AvatarDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../store.tsx";

const AppHeader = () => {
  const title = useSelector((state: RootState) => state.sidebar.activeTitle);

  return (
    <div className=" sticky flex justify-between relative w-full top-2 px-4 py-2 z-20 bg-white rounded-xl">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center">
        <NotificationDropdown />
        <AvatarDropdown />
      </div>
    </div>
  );
};

export default AppHeader;
