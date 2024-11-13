import { Avatar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const AvatarDropdown = () => {
  const navigator = useNavigate();
  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigator("/auth");
  };

  return (
    <Dropdown
      label={
        <Avatar
          img="https://flowbite.com/docs/images/logo.svg"
          size={"sm"}
          rounded
          bordered
          color={"blue"}
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">{user.fullName}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>Profiles</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default AvatarDropdown;
