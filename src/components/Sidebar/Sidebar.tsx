import { FaCompass, FaHeart } from 'react-icons/fa'
import SidebarIcon from './SidebarIcon'
import { useNavigate } from 'react-router'
import { useProfile } from '../../hooks/useProfile'
import type { User } from '../../types'


const Sidebar = () => {
     const navigate = useNavigate();
     const user: User | null = useProfile();

     return (
          <div className='w-20 h-screen border border-r-gray-300 py-4 flex justify-center'>
               <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-6'>
                         <div className='flex justify-center bg-indigo-400 rounded-md items-center hover:cursor-pointer'>
                              <p className='font-extrabold text-2xl text-white'>E</p>
                         </div>
                         <SidebarIcon icon={<FaCompass />} path="/discover" />
                         <SidebarIcon icon={<FaHeart />} path="/liked-boards" />
                    </div>
                    <div
                         className='bg-indigo-400 h-10 w-10 rounded-full hover:cursor-pointer'
                         onClick={() => navigate("/profile")}
                    >
                         <img
                              src={user?.picture}
                              alt=""
                              className="w-full h-full object-cover rounded-full"
                         />
                    </div>
               </div>
          </div>
     )
}

export default Sidebar