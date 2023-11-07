import { Contact } from "../store/store";
import { useState } from "react";
import ModalTemplate from "./ModalTemplate";

type ModalFormProp = {
  closeModal: () => void;
  onSubmit: (contact: Contact) => void;
  // initialContact?: Contact;
};
const Modal: React.FC<ModalFormProp> = ({
  closeModal,
  onSubmit,
  // initialContact,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect
  // useEffect(() => {
  //   if (initialContact) {
  //     setName(initialContact.name);
  //     setPhone(initialContact.phone);
  //   }
  // }, [initialContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
    };
    onSubmit(newContact);
    setName("");
    setPhone("");
    closeModal();
  };

  return (
    <ModalTemplate closeModal={closeModal}>
      <div className=" bg-white py-6 px-4 my-2 rounded-lg z-10">
        <div className=" flex flex-col">
          <button
            onClick={closeModal}
            className=" bg-red-700 hover:bg-red-500 px-2 py-1 rounded-md text-white ml-auto"
          >
            Close
          </button>

          <form
            className=" flex flex-col items-center my-4 gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparent border w-full  border-gray-900 rounded-md h-10 px-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="bg-transparent border w-full  border-gray-900 rounded-md h-10 px-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className=" ml-auto bg-purple-700 hover:bg-purple-500 text-white px-2 py-2 rounded-md font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default Modal;
