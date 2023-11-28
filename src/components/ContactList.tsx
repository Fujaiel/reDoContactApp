import useContactStore, { Contact } from "../store/store";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
// import ModalTemplate from "./ModalTemplate";

type ContactListProps = {
  contacts: Contact[];
  // closeModal: () => void;
};

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  const deleteContact = useContactStore((state) => state.deleteContact);
  const updateContact = useContactStore((state) => state.updateContact);
  // const contacts = useContactStore((state)=> state.contacts)

  const [editingContact, setEditingContact] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const handleDelete = (id: number) => {
    deleteContact(id);
  };

  const handleUpdate = (id: number, newContact: Contact) => {
    updateContact(id, newContact);
    setEditingContact(null);
    setEditName("");
    setEditPhone("");
  };

  
  return (
    <>
      <div>
        {contacts.map((contact) => (
          <div
            className=" border border-white my-4 rounded-md flex flex-grow items-center  text-white"
            key={contact.id}
          >
            <FaRegUserCircle className=" text-white text-5xl" />
            {editingContact === contact.id ? (
              <div className="flex flex-col">
                <input
                  className=" text-black rounded-md pl-4 my-2 h-10 font-medium"
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  className=" text-black rounded-md pl-4 my-2 h-10 font-medium"
                  type="number"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
                <button
                  className="mr-2 bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-500 w-fit mx-auto mb-2"
                  onClick={() =>
                    handleUpdate(contact.id, {
                      id: contact.id,
                      name: editName,
                      phone: editPhone,
                    })
                  }
                >
                  Update
                </button>
              </div>
            ) : (
              <div>
                {contact && contact.name && (
                  <h3 className="my-2">{contact.name}</h3>
                )}
                {contact && contact.phone && (
                  <p className="my-2">{contact.phone}</p>
                )}
                <button
                  className="mr-2 bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-500 mb-2"
                  onClick={() => {
                    setEditingContact(contact.id);
                    setEditName(contact.name);
                    setEditPhone(contact.phone);
                  }}
                >
                  Edit
                </button>
                <button
                  className=" bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-500"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
