import { useRef, useState } from 'react';
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
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const handleOnCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleOnUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const handleOnDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
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
