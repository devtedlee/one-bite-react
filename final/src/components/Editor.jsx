import { useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const getStringedDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

function Editor({ onSubmit }) {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const handleOnChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          onChange={handleOnChangeInput}
          name="createdDate"
          type="date"
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              onClick={() =>
                handleOnChangeInput({
                  target: { name: "emotionId", value: emotion.emotionId },
                })
              }
              {...emotion}
              isSelected={emotion.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={handleOnChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button onClick={handleOnSubmit} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
}

export default Editor;
