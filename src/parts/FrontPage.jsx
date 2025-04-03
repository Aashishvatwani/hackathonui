import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "The best way to predict the future is to create it. - Alan Kay",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Make it work, make it right, make it fast. - Kent Beck",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
  "Fix the cause, not the symptom. - Steve Maguire",
  "Coding is today's language of creativity. - Maria Klawe",
  "It’s not a bug; it’s an undocumented feature. - Anonymous",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
  "Knowledge is power, but enthusiasm pulls the switch. - Ivern Ball",
  "If you think math is hard, try web design. - Trish Parr",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Code never lies, comments sometimes do. - Ron Jeffries",
  "Before software can be reusable it first has to be usable. - Ralph Johnson",
  "Don’t comment bad code — rewrite it. - Brian Kernighan",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
];

const FrontPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInteraction = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 10000);
  };

  return (
    <div className="container" onClick={handleInteraction}>
      <motion.div className={`rotating-border ${isActive ? "active" : ""}`} />
      <div className="auth-box">
        <h1 className="heading">Welcome to Code Improve Hub</h1>
        <p>Sharpen your coding skills and build amazing projects.</p>
        <button className="button" onClick={() => alert("Student Login")}>
          Login as Student
        </button>
        <button className="button" onClick={() => alert("Company Login")}>
          Login as Company
        </button>
      </div>
      <div className="quote-container">
        <p>{quotes[quoteIndex]}</p>
      </div>
    </div>
  );
};

const styles = `
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: black;
    color: white;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width:100vw;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  /* Rotating border animation */
  .rotating-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(203, 40, 203, 0.5);
    border-radius: 10px;
    animation: none;
    will-change: transform;
  }

  .rotating-border.active {
    animation: rotate-clockwise 10s linear infinite alternate;
  }

  @keyframes rotate-clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Login Box */
  .auth-box {
    background-color: black;
    border: 1px solid purple;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
    color: white;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
    text-align: center;
    z-index: 1;
    position: relative; /* ensure it stays in the middle */
  }

  .heading {
    font-size: 1.5rem;
    font-weight: bold;
  }

  /* Buttons */
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #374151;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    border: none;
    font-size: 1rem;
    width: 100%;
  }

  .button:hover {
    background-color: purple;
  }

  /* Quotes Section */
  .quote-container {
    position: absolute; /* position absolutely */
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    font-style: italic;
    text-align: center;
    font-size: 1.2rem;
    color: #ccc;
    z-index: 1;
    width: 90%; /* prevent quote from becoming too wide */
    max-width: 600px;
  }
`;

const FrontPageWithStyles = () => {
  return (
    <>
      <style>{styles}</style>
      <FrontPage />
    </>
  );
};

export default FrontPageWithStyles;