import { useContext } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem";
import { ContactStateContext } from "../App";

export default function ContactList() {
  const Contacts = useContext(ContactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {Contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
