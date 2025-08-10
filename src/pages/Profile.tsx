import { FaHeart, FaPlus } from "react-icons/fa"
import { useState } from "react"


function Profile() {
     const [showModal, setShowModal] = useState(false);
     const [boardName, setBoardName] = useState("");
     const handleCreateBoard = () => {
          setShowModal(false);
          setBoardName("");
     };

     return (
          <div className='flex h-full w-full flex-col'>
               <div className="flex flex-col w-full items-center">
                    <div className="w-full h-56 bg-pink-300 relative rounded-lg"></div>
                    <div className="flex flex-col items-center gap-2 absolute top-40">
                         <div className="h-40 w-40 bg-gray-300 rounded-full">
                              <img
                                   src="https://i.pinimg.com/736x/72/1a/ef/721aef5511986ac5e558230a19c00d1b.jpg"
                                   alt=""
                                   className="w-full h-full object-cover rounded-full"
                              />
                         </div>
                         <h1 className="font-semibold text-2xl">Nexiq7</h1>
                         <div className="flex items-center gap-2">
                              <p className="font-semibold text-black">500 Follower </p>
                              <FaHeart className="text-red-600 cursor-pointer hover:text-red-400" />
                         </div>
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
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div className="w-64 h-36 bg-black rounded-lg"></div>
                              <p className="font-semibold text-black -mb-3">Favorite Edits</p>
                              <p className="text-black text-sm">100 Edits</p>
                         </div>
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
                              className="relative bg-white rounded-lg p-8 w-96 flex flex-col gap-4 shadow-lg"
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
                              <button
                                   className="text-white rounded px-4 py-2 font-semibold"
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
