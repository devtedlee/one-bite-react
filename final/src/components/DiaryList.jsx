import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DiaryList({ data }) {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const handleOnChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={handleOnChangeSortType}>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
