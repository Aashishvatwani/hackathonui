import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import PracticeTests from "./pages/PracticeTests";
import MockExams from "./pages/MockExams";
import ReferAndRule from "./pages/ReferAndRule";
import HowToUse from "./pages/HowToUse";
import Settings from "./pages/Settings";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-darkBg">
        {/* Sidebar remains fixed */}
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/mock-exams" element={<MockExams />} />
            <Route path="/refer-and-rule" element={<ReferAndRule />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
