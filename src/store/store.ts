import { create } from "zustand";

import {
  editContact,
  createContact,
  removeContact,
  fetchContacts,
} from "../api/api";

export type Contact = {
  id: number;
  name: string;
  phone: number;
};

type State = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  deleteContact: (id: number) => void;
  updateContact: (id: number, updateContact: Contact) => void;
  getContact: () => void;
};

const useContactStore = create<State>((set) => ({
  contacts: [],
  // add contact
  addContact: async (contact) => {
    try {
      const newContact = await createContact(contact);
      set((state) => ({ contacts: [...state.contacts, newContact] }));
    } catch (error) {
      console.log(error);
    }
  },

  // delete contact
  deleteContact: async (id) => {
    try {
      await removeContact(id);
      set((state) => ({
        contacts: state.contacts.filter((contact) => contact.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  // update contact
  updateContact: async (id, updateContact) => {
    try {
      await editContact(id, updateContact);
      set((state) => ({
        contacts: state.contacts.map((contact) =>
          contact.id === id ? updateContact : contact
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  // fetch contacts
  getContact: async () => {
    try {
      const contacts = await fetchContacts();
      set(() => ({ contacts }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useContactStore;
