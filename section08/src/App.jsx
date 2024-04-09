import { useRef, useState, useReducer } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '잘준비 하기',
    date: new Date().getTime(),
  },
];

function reducer(todos, action) {
  switch (action.type) {
    case 'CREATE':
      return todos.concat(action.payload);
    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const handleOnCreate = (content) => {
    dispatch({
      type: 'CREATE',
      payload: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const handleOnUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      payload: targetId,
    });
  };

  const handleOnDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      payload: targetId,
    });
  };

  return (
    <div className='App'>
      <Header />
      <Editor onSubmit={handleOnCreate} />
      <List todos={todos} onUpdate={handleOnUpdate} onDelete={handleOnDelete} />
    </div>
  );
}

export default App;
