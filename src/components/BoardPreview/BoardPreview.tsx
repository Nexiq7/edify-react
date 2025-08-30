import { useNavigate } from 'react-router-dom';

const BoardPreview = ({ board }: any) => {
     const navigate = useNavigate();
     return (
          <div key={board.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => navigate(`/board/${board.id}`)}>
               <div className="w-64 h-36 rounded-lg overflow-hidden">
                    {board?.thumbnailUrl ? (
                         <img src={board.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                         <div className="w-full h-full bg-black"></div>
                    )}
               </div>
               <div className="flex justify-between items-center">
                    <p className="font-semibold text-black">{board?.title}</p>
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
               <p className="text-black text-sm">{board?.videoCount} Edits</p>
          </div>
     )
}

export default BoardPreview