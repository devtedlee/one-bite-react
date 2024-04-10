import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ Contacts, OnRemove }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {Contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} OnRemove={OnRemove} />
      ))}
    </div>
  );
}
