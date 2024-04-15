import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../utils/get-emotion-image";
import Button from "./Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

function DiaryItem({ id, createdDate, content, emotionId }) {
  const { handleOnDeleteDiary } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="이모티콘" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        <Button
          type={"NEGATIVE"}
          onClick={() => handleOnDeleteDiary(id)}
          text={"삭제하기"}
        />
      </div>
    </div>
  );
}

export default DiaryItem;
