import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Discover from "./pages/Discover.tsx";
import LikedBoards from "./pages/LikedBoards.tsx";
import Profile from "./pages/Profile.tsx";
import Board from "./pages/Board.tsx";
import Layout from "./Layout.tsx";
import Login from "./pages/Login.tsx";

const root: any = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/discover" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="discover" element={<Discover />} />
        <Route path="liked-boards" element={<LikedBoards />} />
        <Route path="profile" element={<Profile />} />
        <Route path="board/:boardId" element={<Board />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
