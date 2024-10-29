import { Label, TextInput } from "flowbite-react";

const TeacherFormInformation = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <Label>Họ và tên</Label>
        <TextInput type="text" value={"Yukihara Dev"} disabled />
      </div>
      <div className="col-span-2">
        <Label>Đơn vị</Label>
        <TextInput
          type="text"
          value={"Khoa Công Nghệ Thông Tin"}
          disabled
          readOnly
        />
      </div>
      <div className="col-span-2">
        <Label>Điện thoại</Label>
        <TextInput type="text" value={"0333853767"} disabled readOnly />
      </div>
      <div className="col-span-2">
        <Label>Email</Label>
        <TextInput
          type="email"
          value={"yukihara@example.com"}
          disabled
          readOnly
        />
      </div>
    </div>
  );
};

export default TeacherFormInformation;
