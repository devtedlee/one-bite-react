import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

// 1. '/': 모든 일기를 조회하는 Home 페이지
// 2. '/new': 새 일기를 작성하는 New 페이지
// 3. '/diary : 일기를 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();
  const onClick = () => {
    nav('/new');
  };

  return (
    <>
      <div>

        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/edit/:id">Edit</Link>
        <Link to="/diary/:id">Diary</Link>
      </div>
      <button onClick={onClick}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
