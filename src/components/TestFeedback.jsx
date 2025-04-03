// import { useState, useEffect } from "react";
// import { database, ref, onValue } from "../firebaseConfig";

// const TestFeedback = () => {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const   companiesRef = ref(database, "companies");

//     onValue(companiesRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const extractedQuestions = [];

//         // Loop through each company
//         Object.values(data).forEach((company) => {
//           if (company.questions) {
//             // Extract question details without test cases
//             extractedQuestions.push({
//               name: company.name || "Unknown Company",
//               level: company.questions[0].level || "N/A",
//               max_time: company.questions[0].max_time,
//               question: company.questions[0].question,
//             });
//           }
//         });

//         setQuestions(extractedQuestions);
//       }
//     });
//   }, []);

//   console.log(questions);

//   return (
//     <div className="mt-6 bg-cardBg p-6 rounded-lg w-full min-h-[400px]">
//       {/* Section Header */}
//       <h2 className="text-xl font-bold mb-4">Test Feedback</h2>

//       {/* Table Container */}
//       <div className="overflow-x-auto mt-4">
//         <table className="w-full border-collapse text-white">
//           <thead>
//             <tr className="border-b border-gray-600">
//               <th className="py-3 px-4 text-left">Company</th>
//               <th className="py-3 px-4 text-left">Level</th>
//               <th className="py-3 px-4 text-left">Max Time</th>
//               <th className="py-3 px-4 text-left">Question</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.length > 0 ? (
//               questions.map((item, index) => (
//                 <tr key={index} className="border-b border-gray-700">
//                   <td className="py-3 px-4">{item.name}</td>
//                   <td className="py-3 px-4">{item.level}</td>
//                   <td className="py-3 px-4">{item.max_time} min</td>
//                   <td className="py-3 px-4">{item.question}</td>
//                   <td className="py-3 px-4">
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                       Attempt
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-5 text-gray-300">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TestFeedback;
import { useState, useEffect } from "react";
import questionsData from "./questionsData"; // Import your hardcoded data

const TestFeedback = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Transform the questionsData into a structured format
    const extractedQuestions = [];

    questionsData.forEach((company) => {
      if (company.questions) {
        company.questions.forEach((question) => {
          extractedQuestions.push({
            company: company.name || "Unknown Company",
            level: question.level || "N/A",
            maxTime: question.max_time || "N/A",
            questionText: question.question || "No question available",
          });
        });
      }
    });

    setQuestions(extractedQuestions);
  }, []);

  return (
    <div className="mt-6 bg-cardBg p-6 rounded-lg w-full min-h-[400px]">
      <h2 className="text-xl font-bold mb-4">Test Feedback</h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse text-white">
          <thead>
            <tr className="border-b border-gray-600 bg-gray-800">
              <th className="py-3 px-4 text-left">Company</th>
              <th className="py-3 px-4 text-left">Level</th>
              <th className="py-3 px-4 text-left">Max Time</th>
              <th className="py-3 px-4 text-left">Question</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-900">
                  <td className="py-3 px-4">{item.company}</td>
                  <td className="py-3 px-4">{item.level}</td>
                  <td className="py-3 px-4">{item.maxTime} min</td>
                  <td className="py-3 px-4">{item.questionText}</td>
                  <td className="py-3 px-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Attempt
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-300">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestFeedback;
