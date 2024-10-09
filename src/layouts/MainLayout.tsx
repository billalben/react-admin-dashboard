import { Outlet } from "react-router-dom";
import Sidebar from "@/components/common/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-gray-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
