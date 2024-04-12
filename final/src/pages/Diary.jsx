import { useParams } from 'react-router-dom';

function Diary() {
  const { id } = useParams();
  return (
    <div>{id}번 일기입니다. </div>
  )
}

export default Diary