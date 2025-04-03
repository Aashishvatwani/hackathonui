import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import TestFeedback from "./TestFeedback";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-darkBg text-textPrimary">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Top Bar */}
        <div className="relative">
          <TopBar />
          {/* Sidebar Toggle Button */}
          <button 
            className="absolute left-4 top-4 text-white bg-gray-800 p-2 rounded-md md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 mt-14 overflow-auto space-y-6">
          <Dashboard />
          <TestFeedback />
        </main>
      </div>
    </div>
  );
};

export default Layout;
