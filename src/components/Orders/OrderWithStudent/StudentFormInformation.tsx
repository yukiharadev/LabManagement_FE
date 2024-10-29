import { Label, TextInput } from "flowbite-react";

const StudentFormInformation = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <Label>Mã sinh viên</Label>
        <TextInput type="text" value={"1571020109"} disabled />
      </div>
      <div className="col-span-2">
        <Label>Họ và tên</Label>
        <TextInput
          type="text"
          value={"Nguyễn Việt Hoàng || Yukihara Dev"}
          disabled
        />
      </div>
      <div className="col-span-1">
        <Label>Lớp học</Label>
        <TextInput type="text" value={"CNTT 15-05"} disabled readOnly />
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

export default StudentFormInformation;
