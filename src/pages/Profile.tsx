import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";

function Profile() {

     const [showModal, setShowModal] = useState(false);
     const [boardName, setBoardName] = useState("");
     const [boards, setBoards] = useState([]);
     const [imageFile, setImageFile] = useState<File | null>(null);
     const [imagePreview, setImagePreview] = useState<string>("");
     const user = useProfile();
     const navigate = useNavigate();

     if (!user?.id) {
          navigate("/login");
     }

     useEffect(() => {
          const fetchBoards = async () => {
               if (user?.id) {
                    try {
                         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/${user.id}/boards`, { credentials: "include" });
                         const data = await response.json();
                         setBoards(data);
                         console.log(data);
                    } catch (error) {
                         setBoards([]);
                    }
               }
          };
          fetchBoards();
     }, [user, showModal]);

     const handleCreateBoard = async () => {
          let imageUrl = "";
          if (imageFile) {
               const formData = new FormData();
               formData.append("file", imageFile);
               formData.append("upload_preset", "edify_preset");
               try {
                    const res = await fetch("https://api.cloudinary.com/v1_1/dvj0uypno/image/upload", {
                         method: "POST",
                         body: formData
                    });
                    const data = await res.json();
                    imageUrl = data.secure_url;
               } catch (err) {
                    console.log("Cloudinary upload error", err);
               }
          }
          if (!user || !user.id) return;
          try {
               const payload: any = {
                    title: boardName,
                    userId: user.id
               };
               if (imageUrl) {
                    payload.thumbnailUrl = imageUrl;
               }
               await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/boards`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload),
                    credentials: "include"
               });
               setShowModal(false);
               setBoardName("");
               setImageFile(null);
               setImagePreview("");
          } catch (err) {
               console.log("Error creating board", err);
          }
     };


     return (
          <div className='flex h-full w-full flex-col'>
               <div className="flex flex-col w-full items-center relative">
                    <div className="w-full h-56 bg-pink-300 relative rounded-lg"></div>
                    <div className="flex flex-col items-center gap-2 absolute top-40">
                         <div className="h-40 w-40 bg-gray-300 rounded-full">
                              <img
                                   src={user?.picture}
                                   alt=""
                                   className="w-full h-full object-cover rounded-full"
                              />
                         </div>
                         <h1 className="font-semibold text-2xl">{user?.username}</h1>
                    </div>
               </div>
               <div className="flex flex-col pt-50 gap-6">
                    <div className="flex items-center gap-4">
                         <h1 className="text-6xl">Boards</h1>
                         <div
                              className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
                              onClick={() => setShowModal(true)}
                         >
                              <FaPlus className="text-black text-4xl" />
                         </div>
                    </div>
                    <div className="flex flex-row gap-4 flex-wrap">
                         {boards && boards.length > 0 ? (
                              boards.map((board: any) => (
                                   <div key={board.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => navigate(`/board/${board.id}`)}>
                                        <div className="w-64 h-36 rounded-lg overflow-hidden">
                                             {board?.thumbnailUrl ? (
                                                  <img src={board.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                                             ) : (
                                                  <div className="w-full h-full bg-black"></div>
                                             )}
                                        </div>
                                        <p className="font-semibold text-black -mb-3">{board?.title}</p>
                                        <p className="text-black text-sm">{board?.videoCount} Edits</p>
                                   </div>
                              ))
                         ) : (
                              <p className="text-black text-lg">No boards found.</p>
                         )}
                    </div>
               </div>

               {/* Modal */}
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
                              <h2 className="text-2xl font-bold mb-2">Create Board</h2>
                              <input
                                   type="text"
                                   className="text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                   placeholder="Board name"
                                   value={boardName}
                                   onChange={e => setBoardName(e.target.value)}
                              />
                              <input
                                   type="file"
                                   accept="image/*"
                                   className="text-indigo-400"
                                   placeholder="Board image (optional)"
                                   onChange={e => {
                                        const file = e.target.files?.[0] || null;
                                        setImageFile(file);
                                        if (file) {
                                             const reader = new FileReader();
                                             reader.onloadend = () => setImagePreview(reader.result as string);
                                             reader.readAsDataURL(file);
                                        } else {
                                             setImagePreview("");
                                        }
                                   }}
                              />
                              {imagePreview && (
                                   <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded" />
                              )}
                              <button
                                   className="text-white rounded px-4 py-2 font-semibold bg-indigo-400 hover:bg-indigo-500 cursor-pointer"
                                   onClick={handleCreateBoard}
                                   disabled={!boardName.trim()}
                              >
                                   Create
                              </button>
                         </div>
                    </div>
               )}
          </div>
     )
}


export default Profile
