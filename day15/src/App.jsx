import { useRef, useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const contactData = [
  { id: 1, name: "김민준", contact: "abc@gmail.com" },
  { id: 2, name: "장현서", contact: "bbb@b.com" },
  { id: 3, name: "이도현", contact: "c@ccc.com" },
];

function reducer (state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.contact];
    case 'REMOVE':
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, contactData);
  const idRef = useRef(4);
  const handleOnAddContact = (name, contact) => {
    dispatch({
      type: 'ADD',
      contact: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  };

  const handleOnRemoveContact = (id) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  }
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor OnAdd={handleOnAddContact}/>
      </section>
      <section>
        <ContactList Contacts={contacts} OnRemove={handleOnRemoveContact} />
      </section>
    </div>
  );
}

export default App;
