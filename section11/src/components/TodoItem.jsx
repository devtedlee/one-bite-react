import { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoDispatchContext } from '../App';

function TodoItem({ id, isDone, content, date }) {
  const { handleOnUpdate, handleOnDelete } = useContext(TodoDispatchContext);
  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={() => handleOnUpdate(id)} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => handleOnDelete(id)}>삭제</button>
    </div>
  );
}

const memoizedTodoItem = memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) {
    return false;
  }
  if (prevProps.isDone !== nextProps.isDone) {
    return false;
  }
  if (prevProps.content !== nextProps.content) {
    return false;
  }
  if (prevProps.date !== nextProps.date) {
    return false;
  }

  return true;
});

export default memoizedTodoItem;
