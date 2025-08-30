import { useNavigate } from "react-router-dom";

interface SidebarIconProps {
  icon: any;
  path: string;
}

export default function SidebarIcon({ icon, path }: SidebarIconProps) {
  const navigate = useNavigate();

  return (
    <p
      onClick={() => navigate(path)}
      className="text-black text-2xl font-extrabold p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer"
    >
      {icon}
    </p>
  );
}
