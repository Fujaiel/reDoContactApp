import { Contact } from "../store/store";
import { useState } from "react";
import ModalTemplate from "./ModalTemplate";

type ModalFormProp = {
  closeModal: () => void;
  onSubmit: (contact: Contact) => void;
};
const Modal: React.FC<ModalFormProp> = ({
  closeModal,
  onSubmit,
  // initialContact,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && phone) {
      const newContact: Contact = {
        id: Date.now(),
        name: name,
        phone: phone,
      };
      onSubmit(newContact);
      setName("");
      setPhone(0);
      closeModal();
    } else {
      console.error("put");
    }
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
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  const numericValue = parseInt(e.target.value, 10);
                  setPhone(numericValue);
                }
              }}
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
