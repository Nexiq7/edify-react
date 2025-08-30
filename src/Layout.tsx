import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Layout() {
     return (
          <div className="flex h-screen w-full">
               <div className="fixed left-0 top-0 h-screen w-20 z-40">
                    <Sidebar />
               </div>
               <main className="flex-1 ml-20 px-6 py-4 overflow-y-auto h-screen">
                    <Outlet />
               </main>
          </div>
     );
}
