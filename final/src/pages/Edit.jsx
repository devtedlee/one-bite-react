import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

function Edit() {
  const params = useParams();
  const { handleOnDeleteDiary, handleOnEditDiary } =
    useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id);

  const handleOnClickDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      handleOnDeleteDiary(params.id);
      nav("/", { replace: true });
    }
  };

  const handleOnSubmit = (input) => {
    if (window.confirm("수정하시겠습니까?")) {
      handleOnEditDiary(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={handleOnClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Edit;
