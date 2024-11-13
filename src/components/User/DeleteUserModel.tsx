import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const DeleteUserModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModel = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        color={"failure"}
        size="xs"
        onClick={handleModel}
        className=" rounded-lg py-1 bg-red-100 text-red-500 hover:text-white "
      >
        <HiOutlineX />
      </Button>
      <Modal show={isOpen} size="md" onClose={handleModel} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                className="ml-2 focus:outline-none focus:ring-0"
                onClick={handleModel}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                color="gray"
                className="ml-2 focus:outline-none focus:ring-0"
                onClick={handleModel}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteUserModel;
