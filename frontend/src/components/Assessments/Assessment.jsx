import React, { useState } from 'react';
import { uploadImage } from '../../lib/api';
import '../../assets/css/auth.css';
import '../../assets/css/assessment.css';

export default function AssessmentComponent() {
  const [fileName, setFileName] = useState("No image selected");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    // Check if user has already accepted disclaimer
    return localStorage.getItem("assessmentDisclaimerAccepted") !== "true";
  });

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      setFileName("No image selected");
    }
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image file.");
      return;
    }
    setLoading(true);
    const result = await uploadImage(selectedFile);
    setLoading(false);

    if (result) {
      setPrediction(result);
    } else {
      alert("Error processing the image.");
    }
  };

  // Accept disclaimer
  const acceptDisclaimer = () => {
    localStorage.setItem("assessmentDisclaimerAccepted", "true");
    setShowDisclaimer(false);
  };

  // Step 1: Disclaimer popup
  if (showDisclaimer) {
    return (
      <div className="auth-page-wrapper">
        <div className="auth-container">
          <div className="disclaimer-popup">
            <h2>Disclaimer</h2>
            <p>This tool is for screening purposes only and does not provide a professional diagnosis.</p>
            <p>Please consult a healthcare professional for an official assessment.</p>
            <div className="popup-buttons">
              <button onClick={acceptDisclaimer}>Accept</button>
              <button onClick={() => window.location.href = "/"}>Do Not Accept</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Assessment form
  return (
    <div className="auth-page-wrapper">
        <div className="assessment-form">
          <h2>Upload Handwritten Text</h2>
          <p className="upload-note">Please upload handwritten text (minimum 10 lines recommended).</p>

          <label htmlFor="file" className="file-label">
            <p>{fileName}</p>
          </label>
          <input 
            id="file" 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            aria-label="Choose a file to upload" 
          />

          <button onClick={handleUpload} disabled={loading}>
            {loading ? "Processing..." : "Upload & Analyze"}
          </button>

          {prediction && (
            <div className="results">
              <h3>Results:</h3>
              <p><strong>Dyslexia:</strong> {prediction.dyslexia}</p>
              <p><strong>Dysgraphia:</strong> {prediction.dysgraphia}</p>
            </div>
          )}
        </div>
    </div>
  );
}
