import { Button, Datepicker, Drawer, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiDownload, HiCog, HiMail } from "react-icons/hi";

const EditUserDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("full name:", fullName);
    console.log("Confirm Email:", email);
    handleClose();
  };

  return (
    <div>
      <Button
        size="xs"
        gradientMonochrome={"info"}
        onClick={() => setIsOpen(true)}
        className="focus:outline-none focus:ring-0"
      >
        Edit
      </Button>
      <Drawer
        open={isOpen}
        className="md:w-1/2 w-full"
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header
          title="Change User Information"
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

            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="mx-2 col-span-2 md:col-span-1 ">
                <Label value="Full Name" />
                <TextInput
                  type="type"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mx-2 col-span-2 md:col-span-1 ">
                <Label className="my-3" value="Email" />
                <TextInput
                  type="email"
                  rightIcon={HiMail}
                  placeholder="yukihara@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mx-2 gap-2 col-span-2 ">
                <Label className="my-3" value="Birth Day" />
                <Datepicker />
              </div>
            </div>
            <div className="flex justify-end mr-2 mt-4">
              <Button
                color="info"
                className="ml-2 focus:outline-none focus:ring-0"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default EditUserDrawer;
