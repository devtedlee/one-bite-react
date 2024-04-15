import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const handleOnDecreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleOnIncreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={handleOnDecreaseMonth} text="<" />}
        rightChild={<Button onClick={handleOnIncreaseMonth} text=">" />}
      />
      <DiaryList data={monthlyData} />
    </>
  );
}

export default Home;
