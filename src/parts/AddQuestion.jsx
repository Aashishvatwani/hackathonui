import { useState } from "react";
import { db } from "../firebaseConfig";
import { ref, set, get } from "firebase/database";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("easy");
  const [max_time, setMaxTime] = useState(1);
  const [testCases, setTestCases] = useState([{ input: "", output: "" }]);

  const addTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  const updateTestCase = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a company name.");
      return;
    }

    const companyRef = ref(db, `companies/${name}`);
    const questionData = {
      level,
      max_time,
      question,
      test_cases: testCases.map((tc, index) => ({
        id: index + 1,
        input: tc.input,
        output: tc.output,
      })),
    };

    try {
      const snapshot = await get(companyRef);
      if (!snapshot.exists()) {
        await set(companyRef, { name, questions: [questionData] });
      } else {
        const existingData = snapshot.val();
        const updatedQuestions = existingData.questions
          ? [...existingData.questions, questionData]
          : [questionData];
        await set(companyRef, { name, questions: updatedQuestions });
      }

      alert("Question added successfully!");
      setQuestion("");
      setLevel("easy");
      setMaxTime(1);
      setTestCases([{ input: "", output: "" }]);
      setName("");
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Error adding question. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.rotatingBorder}></div>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Add a Coding Question</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.inputField}
            type="text"
            placeholder="Enter the name of the company"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            style={styles.inputField}
            placeholder="Enter question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>

          <select
            style={styles.inputField}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="deadly">Deadly</option>
          </select>
          <input
            style={styles.inputField}
            type="number"
            placeholder="Max time in minutes"
            value={max_time}
            onChange={(e) => setMaxTime(parseInt(e.target.value))}
          />

          <div>
            <h3>Test Cases:</h3>
            {testCases.map((tc, index) => (
              <div key={index} style={styles.testCaseContainer}>
                <input
                  style={styles.testCaseInput}
                  type="text"
                  placeholder="Input"
                  value={tc.input}
                  onChange={(e) => updateTestCase(index, "input", e.target.value)}
                />
                <input
                  style={styles.testCaseInput}
                  type="text"
                  placeholder="Output"
                  value={tc.output}
                  onChange={(e) => updateTestCase(index, "output", e.target.value)}
                />
              </div>
            ))}
            <button type="button" style={styles.button} onClick={addTestCase}>
              + Add Test Case
            </button>
          </div>

          <button type="submit" style={styles.button}>
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}
// Assume the styles object is defined elsewhere in your project


// ... styles remain the same
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Full viewport height for centering
    width: "97vw", // Full width, adjust as needed
    padding: "20px",
    position: "relative",
    backgroundColor: "#121212", // Darker background for professionalism
    color: "#e0e0e0", // Light gray for text
    overflow: "hidden",
    transition: "background-color 0.3s ease", // Smooth transition
  },
  rotatingBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "2px solid rgba(128, 0, 128, 0.6)", // Slightly more opaque border
    borderRadius: "12px",
    animation: "rotate-clockwise 10s linear infinite alternate", // Slower rotation
    boxShadow: "0 0 20px rgba(128, 0, 128, 0.4)", // More pronounced shadow
    transition: "border 0.3s ease, box-shadow 0.3s ease",
  },
  authBox: {
    backgroundColor: "#1e1e1e", // Darker box background
    border: "1px solid #5e35b1", // Slightly lighter border
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)", // Deeper shadow
    maxWidth: "600px", // Adjusted max width
    width: "90%",
    margin:"20px",
    padding: "40px", // Reduced padding
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Increased gap
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 1,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  heading: {
    fontSize: "1.8rem", // Larger heading
    fontWeight: "600",
    color: "#d1c4e9", // Lighter purple for heading
    marginBottom: "15px",
    transition: "color 0.3s ease",
  },
  inputField: {
    width: "100%",
    padding: "12px 15px", // Slightly larger input fields
    margin: "10px 0", // Reduced vertical margin
    borderRadius: "8px",
    border: "1px solid #424242", // Darker input border
    backgroundColor: "#2a2a2a", // Darker input background
    color: "#e0e0e0",
    fontSize: "1rem",
    transition: "border 0.3s ease, background-color 0.3s ease",
  },
  button: {
    display: "flex",
    margin:"10px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#673ab7", // More vibrant purple
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
    border: "none",
    fontSize: "1rem",
    fontWeight: "500",
    width: "100%",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  buttonHover: {
    backgroundColor: "#512da8", // Darker purple on hover
    transform: "scale(1.02)",
  },
  testCaseContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  testCaseInput: {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #424242",
    backgroundColor: "#2a2a2a",
    color: "#e0e0e0",
    fontSize: "1rem",
    transition: "border 0.3s ease, background-color 0.3s ease",
  },
  quoteContainer: {
    position: "absolute",
    paddingtop:"20px",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "30px",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#9e9e9e", // Slightly darker gray
    zIndex: 1,
    width: "90%",
    maxWidth: "500px",
    transition: "color 0.3s ease",
  },
};