import { useRef, useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ OnAdd }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const onChangeInput = (e) => {
    const { target: { value, className } } = e;
    if (className === 'name') setName(value);
    if (className === 'contact') setContact(value);
  }

  const handleOnAdd = () => {
    if (name === '' || contact === '') {
      if (name === '') nameRef.current.focus();
      if (contact === '') contactRef.current.focus();
      return;
    }

    OnAdd(name, contact);
    setName('');
    setContact('');
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input ref={nameRef} onChange={onChangeInput} className="name" value={name} placeholder="이름 ..." />
        <input ref={contactRef} onChange={onChangeInput} className="contact" value={contact} placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
}