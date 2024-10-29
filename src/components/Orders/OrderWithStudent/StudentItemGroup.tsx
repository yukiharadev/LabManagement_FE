import { Button } from "flowbite-react";

interface Student {
  data: {
    studentName: string;
    studentId: string;
    studentPhoneNumber: string;
    teacherId: string;
  };
}

const StudentItemGroup = (props: Student) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.data.studentName}
      </th>
      <td className="py-1 px-2">{props.data.studentId}</td>
      <td className=" py-1 px-2">{props.data.studentPhoneNumber}</td>
      <td>
        <div className="py-1 px-2 ">{props.data.teacherId}</div>
      </td>
      <td>
        <div className=" flex gap-2">
          <Button size={"xs"} gradientMonochrome="info">
            Sửa
          </Button>
          <Button size={"xs"} gradientMonochrome="failure">
            Xóa
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default StudentItemGroup;
