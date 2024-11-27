import {
  Button,
  Datepicker,
  Drawer,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { HiClock, HiCog, HiDownload, HiMail } from "react-icons/hi";
import React, { useState } from "react";
import api from "../../configs/axios.config";
import { CREATE_USER_BY_ADMIN } from "../../configs/Api.config";
import { toast } from "react-toastify";

interface CreateUserFormProps {

  onCreated: () => Promise<void>;

}

const CreateUserForm = (props: CreateUserFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("admin");
  const [gender, setGender] = useState("1");
  const [birthDay, setBirthDay] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      username: userName,
      fullName,
      avatar: "DEFAULT",
      email,
      password,
      role,
      gender,
      dateOfBirth: birthDay,
    };

    try {

      const response = await api.post(CREATE_USER_BY_ADMIN, userData);
      if (response.status === 200) {
        toast.success("User created successfully");
      }
      props.onCreated();

    } catch (error) {
      console.log("Error:", error);

    }
    handleClose();
  };

  return (
    <>
      <Button size="xs" className="my-4" onClick={() => setIsOpen(true)}>
        Add New
      </Button>
      <Drawer
        open={isOpen}
        className="md:w-1/2 w-full"
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header
          title="Create New User"
          titleIcon={() => <HiCog className="w-6 h-6 mr-2" />}
        />
        <Drawer.Items>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center ">
                  <HiDownload size={20} />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label value="Full Name" />
                <TextInput
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <Label value="User Name" />
                <TextInput
                  type="text"
                  rightIcon={HiClock}
                  placeholder="Yukihara"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <Label value="Email" />
                <TextInput
                  type="email"
                  rightIcon={HiMail}
                  placeholder="yukihara@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label value="Birth Day" />
                <Datepicker
                  onChange={(date) =>
                    setBirthDay(date ? date.toISOString().split("T")[0] : "")
                  }
                />
              </div>
              <div>
                <Label value="Role" />
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                  <option value="lecturer">Lecturer</option>
                </Select>
              </div>
              <div>
                <Label value="Giới tính" />
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Nam</option>
                  <option value="Female">Nữ</option>
                </Select>
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="***********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button color="info" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CreateUserForm;
