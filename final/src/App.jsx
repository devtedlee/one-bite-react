import "./App.css";
import { useRef, useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-04-15").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-04-14").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-03-14").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.diary];
    case "EDIT":
      return state.map((diary) =>
        String(diary.id) === String(action.diary.id) ? action.diary : diary
      );
    case "DELETE":
      return state.filter((diary) => String(diary.id) !== String(action.id));
    default:
      break;
  }
  return state;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(4);
  const [data, dispatch] = useReducer(reducer, mockData);

  const handleOnAddDiary = (createdDate, emotionId, content) => {
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

  const handleOnEditDiary = (id, createdDate, emotionId, content) => {
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

  const handleOnDeleteDiary = (id) => {
    dispatch({ type: "DELETE", id });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ handleOnAddDiary, handleOnEditDiary, handleOnDeleteDiary }}
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
