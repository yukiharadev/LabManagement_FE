import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import StudentItemGroup from "./StudentItemGroup.tsx";

interface Student {
  studentName: string;
  lectureName: string;
}
interface StudentsGroupProps {
  onChange: (groupStudents: Student[]) => void;
}

const StudentsGroup: React.FC<StudentsGroupProps> = ({ onChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [formStudents, setFormStudents] = useState<Student[]>([]);

  const handleAddNewClick = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    const newStudents = [
      ...formStudents,
      { studentName, lectureName },
    ];

    setFormStudents(newStudents);
    setStudentName("");
    setLectureName("");
    setIsAdding(false);

    // Gửi dữ liệu mới về component cha
    onChange(newStudents);
  };

  return (
    <div className="mt-2 sm:rounded-lg">
      <div className="flex justify-between">
        <Label className="flex items-center" value="Danh sách nhóm sinh viên" />
        <Button
          size="sm"
          className="ml-2 mb-2 focus:outline-none focus:ring-0"
          onClick={handleAddNewClick}
        >
          Thêm mới
        </Button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-3">Họ và tên</th>
            <th scope="col" className="px-2 py-3">Giảng viên hướng dẫn</th>
            <th scope="col" className="py-3 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {isAdding && (
            <tr>
              <td className="px-2 py-1">
                <TextInput
                  placeholder="Tên sinh viên"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
              </td>
              <td className="py-1 px-2">
                <TextInput
                  placeholder="Giảng viên hướng dẫn"
                  value={lectureName}
                  onChange={(e) => setLectureName(e.target.value)}
                  required
                />
              </td>
              <td className="py-1 px-2">
                <Button size="xs" onClick={handleSave}>
                  Lưu
                </Button>
              </td>
            </tr>
          )}
          {formStudents.map((student, index) => (
            <StudentItemGroup key={index} data={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsGroup;
