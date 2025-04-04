import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignupPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) return alert("Please fill in all fields.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to create account.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google signup error:", error);
      alert("Google signup failed.");
    }
  };

  const handleGithubSignup = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error("GitHub signup error:", error);
      alert("GitHub signup failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden px-4">
      <div className="absolute inset-0 border-2 border-purple-600 opacity-30 animate-spin-slow pointer-events-none" />
      <div className="bg-black border border-purple-600 text-white shadow-lg rounded-xl p-6 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-3 hover:bg-gray-600 transition"
        >
          <FcGoogle /> Sign up with Google
        </button>

        <button
          onClick={handleGithubSignup}
          className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-4 hover:bg-gray-600 transition"
        >
          <FaGithub /> Sign up with GitHub
        </button>

        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none"
          />

          <button
            onClick={handleSignup}
            className="bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-md"
          >
            Create Account
          </button>

          <button
            onClick={() => alert("Redirect to Login")}
            className="bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-md transition"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
