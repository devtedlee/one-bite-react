import { useRef, useState, useContext } from 'react';
import './Editor.css';
import { TodoDispatchContext } from '../App';

function Editor() {
  const [content, setContent] = useState('');
  const contentRef = useRef('');
  const { handleOnCreate } = useContext(TodoDispatchContext);

  const handleOnSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    handleOnCreate(content);
    setContent('');
  };

  const handleOnChangeText = (event) => {
    setContent(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleOnSubmit();
    }
  };
  return (
    <div className='Editor'>
      <input ref={contentRef} type='text' value={content} onKeyDown={onKeyDown} onChange={handleOnChangeText} />
      <button onClick={handleOnSubmit}>추가</button>
    </div>
  );
}

export default Editor;
