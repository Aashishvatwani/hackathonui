import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaListAlt,
  FaClipboard,
  FaGift,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside (on smaller screens)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth <= 768) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-screen bg-sidebar text-textPrimary flex flex-col p-5 shadow-lg transition-all duration-300 sidebar-container ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Toggle Button (Only visible on mobile) */}
      <button className="absolute top-4 right-4 text-white md:hidden" onClick={toggleSidebar}>
        <FaTimes size={20} />
      </button>

      {/* Logo / Title */}
      <h1 className={`text-xl font-bold text-accent mb-6 transition-opacity ${!isOpen && "opacity-0 hidden"}`}>
        testmyskills
      </h1>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        <SidebarItem icon={<FaHome />} label="Dashboard" isOpen={isOpen} path="/" />
        <SidebarItem icon={<FaListAlt />} label="Practice Tests" isOpen={isOpen} path="/practice-tests" />
        <SidebarItem icon={<FaClipboard />} label="Mock Exams" isOpen={isOpen} path="/mock-exams" />
        <SidebarItem icon={<FaGift />} label="Refer & Rule" isOpen={isOpen} path="/refer-and-rule" />
      </nav>

      {/* Footer Links */}
      <div className="mt-auto space-y-2">
        <SidebarItem icon={<FaQuestionCircle />} label="How to Use" isOpen={isOpen} path="/how-to-use" />
        <SidebarItem icon={<FaCog />} label="Settings" isOpen={isOpen} path="/settings" />
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, isOpen, path }) => (
  <Link to={path} className="no-underline text-inherit">
    <div
      className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all hover:bg-cardBg"
    >
      {icon}
      <span className={`${!isOpen ? "hidden opacity-0" : "opacity-100 transition-all"}`}>{label}</span>
    </div>
  </Link>
);

export default SideBar;
