import { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt, FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import SideBar from "..//components/SideBar";
import TopBar from "../components/TopBar";

const Settings = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    memberSince: "2023-10-27",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    // Redirect to login page or clear session, etc.
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
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
          {/* Settings Content */}
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-8 text-purple-400 border-b-2 border-purple-600 pb-4">
              <FaUser className="inline-block mr-2" /> User Settings
            </h2>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FaUser className="mr-4 text-gray-400" />
                <label className="block text-lg font-semibold mr-2">
                  Username:
                </label>
              </div>
              <p className="bg-gray-800 rounded-md p-3">
                {user.username}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-4 text-gray-400" />
                <label className="block text-lg font-semibold mr-2">
                  Email:
                </label>
              </div>
              <p className="bg-gray-800 rounded-md p-3">
                {user.email}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="mr-4 text-gray-400" />
                <label className="block text-lg font-semibold mr-2">
                  Member Since:
                </label>
              </div>
              <p className="bg-gray-800 rounded-md p-3">
                {user.memberSince}
              </p>
            </div>

            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md flex items-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;