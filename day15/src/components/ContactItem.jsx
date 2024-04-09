import "./ContactItem.css";

export default function ContactItem({ id, name, contact, OnRemove }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => OnRemove(id)}>🗑️ Remove</button>
    </div>
  );
}
