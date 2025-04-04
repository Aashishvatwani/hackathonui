import { useState } from "react";
import { FaBars, FaTimes, FaShareAlt, FaGift, FaUsers, FaClipboardList, FaTrophy } from "react-icons/fa";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const ReferAndRule = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
          {/* ReferAndRule Content */}
          <div className="container mx-auto max-w-2xl bg-gray-900 text-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-purple-400 mb-4">
                <FaShareAlt className="inline-block mr-2" /> Refer & Rule 🚀
              </h2>
              <p className="text-lg text-gray-300">
                Invite your friends and unlock amazing rewards! 🎉
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                How It Works 🛠️
              </h3>
              <p className="text-gray-200 leading-relaxed">
                1. <FaUsers className="inline-block mr-1" /> Share your unique referral link with friends.
                2. <FaClipboardList className="inline-block mr-1" /> When they sign up using your link, they get a special bonus!
                3. <FaGift className="inline-block mr-1" /> You earn rewards for every successful referral.
                4. <FaTrophy className="inline-block mr-1" /> The more friends you invite, the bigger your rewards!
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                Rewards You Can Earn 🎁
              </h3>
              <p className="text-gray-200 leading-relaxed">
                🏆 For your first referral, you get a 10% discount on your next purchase. 🥳
                <br />
                🎉 For 5 referrals, you unlock a free premium feature for a month. 🤩
                <br />
                🎁 Reach 10 referrals, and you'll receive an exclusive gift box from us! 💖
                <br />
                🌟 Become a top referrer (20+ referrals) and get a chance to win a grand prize! 🌟
                <br />
                Remember, sharing is caring! Spread the word and let's grow together. 🤝
                <br />
                Your friends will love the benefits, and you'll love the rewards. It's a win-win! 🌈
                <br />
                Keep track of your referrals on your dashboard. 📊
                <br />
                We're always adding new and exciting rewards, so stay tuned! 🔔
                <br />
                Got questions? Check out our FAQ section or contact our support team. 💌
                <br />
                Happy referring! 🚀 Let's make this community even more awesome. ✨
                <br />
                Don't forget to share your referral link on social media! 📱💻
                <br />
                Every friend counts. Start inviting today! 🚀
                <br />
                We appreciate your support and enthusiasm! 😊
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://i.imgur.com/your_doodle_here.png" // Replace with your doodle URL
                alt="Referral Doodle"
                className="mx-auto max-w-xs mb-6"
              />
              <p className="text-gray-400">
                Share the love and reap the rewards! 💖
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReferAndRule;
  
