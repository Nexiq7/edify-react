import { FaCompass, FaHeart } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { RiMessage3Fill } from 'react-icons/ri'
import SidebarIcon from './SidebarIcon'
import { useNavigate } from 'react-router'


const Sidebar = () => {
     const navigate = useNavigate();

     return (
          <div className='w-20 h-screen border border-r-gray-300 py-4 flex justify-center'>
               <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-6'>
                         <div className='flex justify-center bg-indigo-400 rounded-md items-center hover:cursor-pointer'>
                              <p className='font-extrabold text-2xl text-white'>E</p>
                         </div>
                         <SidebarIcon icon={<HiHome />} path="/" />
                         <SidebarIcon icon={<FaCompass />} path="/discover" />
                         <SidebarIcon icon={<FaHeart />} path="/liked-boards" />
                         <SidebarIcon icon={<RiMessage3Fill />} path="/messages" />
                    </div>
                    <div
                         className='bg-indigo-400 h-10 w-10 rounded-full hover:cursor-pointer'
                         onClick={() => navigate("/profile")}
                    >
                         <img
                              src="https://i.pinimg.com/736x/72/1a/ef/721aef5511986ac5e558230a19c00d1b.jpg"
                              alt=""
                              className="w-full h-full object-cover rounded-full"
                         />
                    </div>
               </div>
          </div>
     )
}

export default Sidebar