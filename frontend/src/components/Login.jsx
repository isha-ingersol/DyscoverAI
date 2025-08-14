import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/css/auth.css"; 
import "../assets/css/colours.css";
import "../assets/css/default.css";

export default function Login({ darkMode, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redirect destination after login
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Login successful! Redirecting...");
        setIsLoggedIn(true);  // <-- update login state globally
        setTimeout(() => navigate(from, { replace: true }), 1000);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className={`auth-page-wrapper ${darkMode ? "dark" : ""}`}>
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="password">Password</label>
          <input
            id="password"
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}
          {success && <p className="auth-success">{success}</p>}

          <button className="auth-button" type="submit">Log In</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
