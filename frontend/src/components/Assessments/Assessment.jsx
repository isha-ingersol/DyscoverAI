import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { uploadImage } from '../../lib/api';  // Import API function
import '../../assets/css/assessment.css';

const AssessmentComponent = () => {
    const [fileName, setFileName] = useState("No image selected");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [showPopup, setShowPopup] = useState(true); // Show disclaimer pop-up initially
    const navigate = useNavigate(); // React Router navigation hook

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
        } else {
            setFileName("No image selected");
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select an image file.");
            return;
        }

        setLoading(true);
        const result = await uploadImage(selectedFile);
        setLoading(false);

        if (result) {
            setPrediction(result);  // Store API response
        } else {
            alert("Error processing the image.");
        }
    };

    return (
        <div className="assessment-container">
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Disclaimer</h2>
                            <p />This tool is for screening purposes only and does not provide a professional diagnosis. 
                            <p />Please consult a healthcare professional for an official assessment.
                        <div className="popup-buttons">
                            <button onClick={() => setShowPopup(false)}>Accept</button>
                            <button onClick={() => navigate('/')}>Do Not Accept</button>
                        </div>
                    </div>
                </div>
            )}

            {!showPopup && (
                <div className="container">
                    <div className="header">
                        <p>Browse Image to Upload</p>
                    </div>

                    <label htmlFor="file" className="footer" aria-label="Upload file">
                        <p>{fileName}</p>
                    </label>

                    <input id="file" type="file" accept="image/*" onChange={handleFileChange} aria-label="Choose a file to upload" />
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
            )}
        </div>
    );
};

export default AssessmentComponent;