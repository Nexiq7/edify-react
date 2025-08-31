import HoverVideo from "../components/HoverVideo/HoverVideo"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useProfile } from "../hooks/useProfile";

function Board() {
     const { boardId } = useParams();
     const [showModal, setShowModal] = useState(false);
     const [videoId, setVideoId] = useState("");
     const [board, setBoard] = useState<{ userId?: number; user?: { id?: number; picture?: string; username?: string }; title?: string; videoCount?: number } | null>(null);
     const [videos, setVideos] = useState([]);
     const [boardLiked, setBoardLiked] = useState(false);
     const [likeId, setLikeId] = useState(false);

     const user = useProfile();

     const navigate = useNavigate();

     useEffect(() => {
          if (boardId) {
               fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/boards/${boardId}`, { credentials: "include" })
                    .then(res => res.json())
                    .then(data => setBoard(data));
               fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/boards/${boardId}/videos`, { credentials: "include" })
                    .then(res => res.json())
                    .then(data => setVideos(data));
          }
          if (user?.id) {
               checkIfUserLikedBoard();
          }
     }, [boardId, videoId, user]);

     const handleAddEdit = async () => {
          if (!videoId.trim() || !boardId) return;
          try {
               await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/videos`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                         url: videoId,
                         boardId: boardId ? parseInt(boardId) : undefined
                    }),
                    credentials: "include"
               });
               setShowModal(false);
               setVideoId("");
          } catch (error) {
               console.log("Error adding edit:", error);
          }
     };

     const handleDeleteBoard = async () => {
          try {
               await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/boards/${boardId}`, {
                    method: "DELETE",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    credentials: "include"
               });
               navigate("/profile")
          } catch (error) {
               console.log("Error deleting board:", error);
          }
     };

     const checkIfUserLikedBoard = async () => {
          try {
               const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/likes/check/${user?.id}/${boardId}`, {
                    method: "GET",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    credentials: "include"
               });
               const data = await response.json();
               setBoardLiked(data.liked);
               setLikeId(data.likeId);
          } catch (error) {
               console.log("Error checking board like status:", error);
          }
     };

     const handleDeleteLikeFromBoard = async () => {
          try {
               await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/likes/${likeId}`, {
                    method: "DELETE",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    credentials: "include"
               });
               setBoardLiked(prev => !prev);
          } catch (error) {
               console.log("Error removing like:", error);
          }
     };

     const handleLikeBoard = async () => {
          try {
               if (!user?.id) {
                    navigate("/login");
               }
               await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/likes`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                         userId: user?.id,
                         boardId: boardId ? parseInt(boardId) : undefined
                    }),
                    credentials: "include"
               });
               setBoardLiked(prev => !prev);
          } catch (error) {
               console.log("Error removing like:", error);
          }
     };

     return (
          <div className='flex h-full w-full'>
               <div className='w-full h-full gap-5 flex flex-col'>
                    <div className='flex w-full flex-col gap-1'>
                         <div className="flex items-center justify-between">
                              <h1 className="text-black text-4xl font-semibold">{board?.title || "Board"}</h1>
                              {board?.userId && user?.id === board.userId ? (
                                   <div
                                        className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
                                        onClick={() => handleDeleteBoard()}
                                   >
                                        <BsFillTrash3Fill className="text-black" />
                                   </div>
                              ) : (
                                   <div
                                        className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
                                        onClick={() => boardLiked ? handleDeleteLikeFromBoard() : handleLikeBoard()}
                                   >
                                        <FaHeart className={boardLiked ? "text-red-500" : "text-black"} />
                                   </div>
                              )}
                         </div>
                         <div className="flex gap-2">
                              <p className="text-black">{board?.videoCount ? `${board?.videoCount} Edits |` : ""}</p>
                              <div className="flex flex-wrap items-center gap-1">
                                   <div className="h-5 w-5 bg-gray-300 rounded-full">
                                        <img
                                             src={board?.user?.picture}
                                             alt=""
                                             className="w-full h-full object-cover rounded-full"
                                        />
                                   </div>
                                   <p className="text-black font-medium">{board?.user?.username}</p>
                              </div>
                         </div>

                         <div className="flex items-center gap-4 mt-6">
                              <h1 className="text-6xl">Edits</h1>
                              <div
                                   className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
                                   onClick={() => setShowModal(true)}
                              >
                                   {board?.userId === user?.id && <FaPlus className="text-black text-4xl" />}
                              </div>
                         </div>
                    </div >
                    <div className='w-full h-full rounded-lg'>
                         <div className='flex flex-row flex-wrap gap-4'>
                              {videos && videos.length > 0 ? (
                                   videos.map((video: any) => {
                                        let videoId = "";
                                        if (video?.url) {
                                             try {
                                                  const urlObj = new URL(video.url);
                                                  videoId = urlObj.searchParams.get("v") || "";
                                             } catch (e) {
                                                  videoId = "";
                                             }
                                        } else {
                                             videoId = video.videoId || video.id || "";
                                        }
                                        return (
                                             <div key={video?.id || video?.videoId} className="w-64 h-36 bg-black rounded-lg overflow-hidden relative">
                                                  <HoverVideo videoId={videoId} />
                                             </div>
                                        );
                                   })
                              ) : (
                                   <p className="text-black">No videos added yet.</p>
                              )}
                         </div>
                    </div>
               </div>
               {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                         <div
                              className="absolute inset-0 bg-black opacity-40"
                              onClick={() => setShowModal(false)}
                         ></div>
                         <div
                              className="relative bg-white rounded-lg p-8 w-72 md:w-96 flex flex-col gap-4 shadow-lg"
                              onClick={e => e.stopPropagation()}
                         >
                              <h2 className="text-2xl font-bold mb-2">Add Edit</h2>
                              <input
                                   type="text"
                                   className="text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                   placeholder="Youtube Edit URL (only YouTube supported)"
                                   value={videoId}
                                   onChange={e => setVideoId(e.target.value)}
                              />
                              <button
                                   className="text-white rounded px-4 py-2 font-semibold bg-indigo-400 hover:bg-indigo-500 cursor-pointer"
                                   onClick={handleAddEdit}
                                   disabled={!videoId.trim()}
                              >
                                   Add
                              </button>
                         </div>
                    </div>
               )}
          </div >

     )
}

export default Board
