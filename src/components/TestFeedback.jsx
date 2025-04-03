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
import questionsData from "./questionsData";

const TestFeedback = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const extractedQuestions = questionsData.map((question) => ({
      id: question.id,
      title: question.title,
      difficulty: question.difficulty,
      complexity: question.complexity,
    }));
    setQuestions(extractedQuestions);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-400 border-b-2 border-purple-600 pb-2"> {/* Highlighted heading */}
        Test Feedback
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-700">
          <thead>
            <tr className="bg-purple-800 text-white">
              {Object.keys(questions[0] || {}).map((header, index) => (
                <th key={index} className="px-4 py-2 border border-gray-700 text-center">
                  {header}
                </th>
              ))}
              <th className="px-4 py-2 border border-gray-700 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-800 even:bg-gray-900 text-gray-200 hover:bg-gray-700 transition duration-150"
                >
                  {Object.keys(item).map((key, idx) => (
                    <td key={idx} className="px-4 py-2 border border-gray-700 text-center">
                      {typeof item[key] === "object"
                        ? JSON.stringify(item[key], null, 2)
                        : item[key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-gray-700 text-center">
                    <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 transition duration-150">
                      Attempt
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Object.keys(questions[0] || {}).length + 1}
                  className="px-4 py-2 border border-gray-700 text-center text-gray-400"
                >
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