import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

function New() {
  const { addDiary } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const handleOnSubmit = (input) => {
    addDiary(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div className="New">
      <Header
        title="새 일기 쓰기"
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={handleOnSubmit} />
    </div>
  );
}

export default New;
