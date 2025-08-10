import { Outlet } from "react-router-dom";
import Sidebar from "./components/HoverVideo/Sidebar";

export default function Layout() {
     return (
          <div className="flex h-full w-full">
               <Sidebar />
               <main className="flex-1 px-6 py-4">
                    <Outlet />
               </main>
          </div>
     );
}
