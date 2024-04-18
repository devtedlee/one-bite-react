import "./App.css";
import { useRef, useReducer, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.diary;
    case "ADD":
      nextState = [...state, action.diary];
      break;
    case "EDIT":
      nextState = state.map((diary) =>
        String(diary.id) === String(action.diary.id) ? action.diary : diary
      );
      break;
    case "DELETE":
      nextState = state.filter(
        (diary) => String(diary.id) !== String(action.id)
      );
      break;
    default:
      break;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("diary");
    if (!savedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(savedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach(({ id }) => {
      if (Number(id) > maxId) maxId = id;
    });

    idRef.current = maxId + 1;
    dispatch({ type: "INIT", diary: parsedData });
    setIsLoading(false);
  }, []);

  const addDiary = (createdDate, emotionId, content) => {
    dispatch({
      type: "ADD",
      diary: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const editDiary = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "EDIT",
      diary: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const deleteDiary = (id) => {
    dispatch({ type: "DELETE", id });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ addDiary, editDiary, deleteDiary }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
