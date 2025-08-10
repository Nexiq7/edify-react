import { FaSearch } from 'react-icons/fa'
import HoverVideo from '../components/HoverVideo/HoverVideo'

function Home() {

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
                    <div className='w-full h-12 bg-gray-100 rounded-lg px-4 flex items-center gap-4'>
                         <div className='h-full'>
                              <FaSearch className='text-black h-full' />
                         </div>
                         <div>
                              <p className='text-black'>Suchen</p>
                         </div>
                    </div>
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

export default Home
