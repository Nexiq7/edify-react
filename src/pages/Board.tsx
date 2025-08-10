import HoverVideo from "../components/HoverVideo/HoverVideo"

function Board() {

     const sampleVideos = [
          "n8JzRKr77kc",
          "cLuT8y2foCo",
          "lCfJQGSI9Kk",
          "z_vSANcSqBk",
          "JU0gV_af-Bo",
          "KUeahsfSW-0",
          "cZULgoazq20",
          "EQHom6RSVqs",
          "el1QTdqiYyQ",
          "y3h8QqMu5qE"
     ]

     return (
          <div className='flex h-full w-full'>
               <div className='w-full h-full gap-5 flex flex-col'>
                    <div className='flex w-full flex-col gap-1'>
                         <h1 className="text-black text-4xl font-semibold">fav edits 2025</h1>
                         <p className="text-black">100 Edits</p>
                         <div className="flex flex-wrap items-center gap-2">
                              <div className="h-8 w-8 bg-gray-300 rounded-full">
                                   <img
                                        src="https://i.pinimg.com/736x/72/1a/ef/721aef5511986ac5e558230a19c00d1b.jpg"
                                        alt=""
                                        className="w-full h-full object-cover rounded-full"
                                   />
                              </div>
                              <p className="text-black font-medium">Nexiq</p>
                         </div>
                    </div >
                    <div className='w-full h-full rounded-lg'>
                         <div className='flex flex-row flex-wrap gap-4'>
                              {sampleVideos.map(videoId => (
                                   <div key={videoId} className="w-64 h-36 bg-black rounded-lg overflow-hidden relative">
                                        <HoverVideo videoId={videoId} />
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div >
     )
}

export default Board
