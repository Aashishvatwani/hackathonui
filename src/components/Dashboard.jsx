import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="p-8 bg-darkBg text-textPrimary w-full min-h-screen[vh50]">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <Card
          title="Your Predicted KCET Score"
          description="AI-powered score prediction based on your mock exams."
          buttonText="Upgrade to Unlock"
          bgColor="bg-cardBg"
        />
        <Card
          title="Mock Exam"
          description="Full-length KCET mock to test real exam readiness."
          buttonText="Take Mock Exam"
          bgColor="bg-purple-900"
        />
        <Card
          title="Practice Test"
          description="Quick, chapter-wise tests to sharpen concepts."
          buttonText="Start Practicing"
          bgColor="bg-purple-800"
        />
      </div>
    </div>
  );
};

export default Dashboard;

