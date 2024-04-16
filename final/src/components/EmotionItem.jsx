import "./EmotionItem.css";
import { getEmotionImage } from "../utils/get-emotion-image";

function EmotionItem({ emotionId, emotionName, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt="이모티콘"
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}

export default EmotionItem;
