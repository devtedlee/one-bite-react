import { memo, useContext } from "react";
import "./ContactItem.css";
import { ContactDispatchContext } from "../App";

export default memo(function ContactItem({ id, name, contact }) {
  const { handleOnRemoveContact } = useContext(ContactDispatchContext);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => handleOnRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
});
