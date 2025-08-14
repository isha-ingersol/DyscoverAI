import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";
import "../assets/css/colours.css";
import "../assets/css/default.css";

export default function Signup({ darkMode }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Registration successful! Redirecting to login...");
        // Optional: redirect after a short delay
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className={`auth-page-wrapper ${darkMode ? "dark" : ""}`}>
      <div className="auth-container">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className="auth-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className="auth-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

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

          <button className="auth-button" type="submit">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}