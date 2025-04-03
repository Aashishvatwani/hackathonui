import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import { color, motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const AuthPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      alert("Failed to sign in with GitHub.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return alert("Enter your email to reset password");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.error("Password reset error:", error);
      alert("Failed to send password reset email.");
    }
  };

  const signInWithEmailPassword = async () => {
    if (!email || !password) return alert("Enter email and password.");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Email/password sign-in error:", error);
      alert("Failed to sign in with email and password.");
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.rotatingBorder}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div style={styles.authBox}>
        <h1 style={styles.heading}>Sign In</h1>
        <button style={styles.socialButton} onClick={signInWithGoogle}>
          <FcGoogle /> Sign in with Google
        </button>
        <button style={styles.socialButton} onClick={signInWithGithub}>
          <FaGithub /> Sign in with GitHub
        </button>
        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.emailPasswordButton} onClick={signInWithEmailPassword}>
            Sign In with Email/Password
          </button>
          <button style={styles.forgotPasswordButton} onClick={handleForgotPassword}>
            Forgot Password?
          </button>
          <button style={styles.signup} onclick={handleForgotPassword}>
            Sign UP
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width:"100vw",
    backgroundColor: "black",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
  },
  rotatingBorder: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "2px solid rgba(128, 0, 128, 0.5)",
    borderRadius: "10px",
    pointerEvents: "none",
  },
  authBox: {
    backgroundColor: "black",
    border: "1px solid purple",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "400px",
    color: "white",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    borderRadius: "10px",
    zIndex: 10,
    position: "relative",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#374151",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    border: "none",
    fontSize: "1rem",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "16px",
  },
  input: {
    backgroundColor: "#374151",
    border: "1px solid #4b5563",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  emailPasswordButton: {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
  },
  forgotPasswordButton: {
    color: "lightblue",
    textDecoration: "underline",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontSize: "1rem",
  },
  signup: {
    backgroundColor: "#6b7280",  // A softer gray, similar to the input background
    color: "white",
    padding: "10px",   // Same as other buttons
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    textAlign: "center",
    width: "100%", // Ensures consistency in width
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  
};

export default AuthPage;
