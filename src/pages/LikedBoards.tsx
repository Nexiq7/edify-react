import { useEffect, useState } from "react";
import { useProfile } from "../hooks/useProfile";
import BoardPreview from "../components/BoardPreview/BoardPreview";

function LikedBoards() {

     const [boards, setBoards] = useState([]);
     const user = useProfile();

     useEffect(() => {
          const fetchBoards = async () => {
               if (user?.id) {
                    try {
                         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/${user.id}/liked-boards`, { credentials: "include" });
                         const data = await response.json();
                         setBoards(data);
                    } catch (error) {
                         setBoards([]);
                    }
               }
          };
          fetchBoards();
     }, [user]);

     return (
          <div className='flex h-full w-full flex-col'>
               <div className="w-full">
                    <h1 className="text-black text-5xl md:text-9xl mb-5">Liked Boards</h1>
               </div>
               <div className="flex flex-row gap-4 flex-wrap">
                    {boards?.map((board: any) => (
                         <BoardPreview key={board.id} board={board} />
                    ))}
               </div>
          </div>

     )
}

export default LikedBoards
