import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from "./pages/Home.tsx";
import Discover from "./pages/Discover.tsx";
import LikedBoards from "./pages/LikedBoards.tsx";
import Messages from "./pages/Messages.tsx";
import Profile from "./pages/Profile.tsx";
import Board from "./pages/Board.tsx";
import Layout from "./Layout.tsx";
import Login from "./pages/Login.tsx";

const root: any = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="liked-boards" element={<LikedBoards />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="board/:boardId" element={<Board />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
