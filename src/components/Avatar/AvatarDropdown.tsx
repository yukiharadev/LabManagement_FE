import { Avatar, Dropdown } from "flowbite-react";

const AvatarDropdown = () => {
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
        <span className="block text-sm">Yukihara</span>
        <span className="block truncate text-sm font-medium">
          nguyenhoang.miyuka@gmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Profiles</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default AvatarDropdown;
