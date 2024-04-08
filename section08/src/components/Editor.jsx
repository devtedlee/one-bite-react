import { useRef, useState } from 'react';
import './Editor.css';

function Editor({ onSubmit }) {
  const [content, setContent] = useState('');
  const contentRef = useRef('');

  const handleOnSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onSubmit(content);
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
