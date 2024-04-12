import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();

  return (
    <div>{id}번 일기 입니다</div>
  )
}

export default Edit