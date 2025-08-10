import { FcGoogle } from "react-icons/fc"
import loginVideo from "../assets/loginVideo.mp4"

function Login() {
     return (
          <div className='flex h-full w-full justify-center items-center'>
               <div className="w-4/6 h-2/3 flex justify-center items-center border border-gray-300 rounded-lg">
                    <div className="flex h-full w-full">
                         <div className="w-2/5 h-full flex justify-center items-center">
                              <div className="flex flex-col h-full gap-3 justify-center">
                                   <h1 className="text-black text-6xl font-bold">Welcome</h1>
                                   <p className="text-black">Continue with Google</p>
                                   <button
                                        className="border border-gray-400 py-2 px-24 rounded-lg hover:bg-gray-100"
                                   >
                                        <div className="flex flex-wrap items-center gap-3">
                                             <FcGoogle className="text-2xl" />
                                             <span className="text-black font-medium">Log in with Google</span>
                                        </div>
                                   </button>
                              </div>
                         </div>
                         <div className="w-3/5 h-full relative overflow-hidden rounded-r-lg">
                              <video
                                   src={loginVideo}
                                   autoPlay
                                   loop
                                   muted
                                   className="absolute inset-0 w-full h-full object-cover"
                              />
                         </div>
                    </div>

               </div>
          </div >
     )
}

export default Login
