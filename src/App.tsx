import { useState } from "react";
import Modal from "./components/Modal";
import useContactStore, { Contact } from "./store/store";
import ContactList from "./components/ContactList";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const addContact = useContactStore((state) => state.addContact);
  const contacts = useContactStore((state) => state.contacts);

  // add contacts
  const handleAddContacts = (contact: Contact)=>{
    addContact(contact)
    closeModal();

  }
  
  // search
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = () => {
    setIsOpen(true);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=" border border-white rounded-lg content-center w-fit p-4 relative my-4">
      <h1 className="text-3xl font-bold text-center text-white my-2">
        Contact List
      </h1>
      <div className="flex items-center flex-grow justify-between border border-white p-4 rounded-md">
        <div>
          <input
            type="search"
            className=" h-10 w-full px-2 rounded-md"
            placeholder="Search"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={openModal}
          className=" bg-purple-700 hover:bg-purple-500 w-fit text-white px-2 py-2 rounded-md ml-2 font-bold"
        >
          Add Contact
        </button>
      </div>

      {isOpen && <Modal closeModal={closeModal} onSubmit={handleAddContacts} />}
      <div>
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
};

export default App;
