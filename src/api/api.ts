import axios from "axios";
import { Contact } from "../store/store";

const API_URL = 'http://localhost:3000';

// create contact
export const createContact = async (contact: unknown) => {
    try {
        const response = await axios.post(`${API_URL}/contacts`, contact);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


// delete contact
export const removeContact = async (id:number)=>{
    try {
        await axios.delete(`${API_URL}/contacts/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// update contact

export const editContact = async(id:number, data:unknown)=>{
    try {
        await axios.put(`${API_URL}/contacts/${id}`,data)
    } catch (error) {
        console.log(error)
    }
}

// fetch contacts
export const fetchContacts = async()=>{
    try {
        const response = await axios.get<Contact[]>(`${API_URL}/contacts`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}