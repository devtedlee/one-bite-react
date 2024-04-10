import { useRef, useState, memo } from "react";
import "./ContactEditor.css";

export default memo(function ContactEditor({ OnAdd }) {
  const [state, setState] = useState({ name: '', contact: '' });
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const onChangeInput = (e) => {
    const { target: { value, className } } = e;
    setState({...state, [className]: value })
  }

  const handleOnAdd = () => {
    if (state.name === '' || state.contact === '') {
      if (state.name === '') nameRef.current.focus();
      if (state.contact === '') contactRef.current.focus();
      return;
    }

    OnAdd(state.name, state.contact);
    setState({ name: '', contact: '' });
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input ref={nameRef} onChange={onChangeInput} className="name" value={state.name} placeholder="이름 ..." />
        <input ref={contactRef} onChange={onChangeInput} className="contact" value={state.contact} placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
});