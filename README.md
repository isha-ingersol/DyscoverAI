# DyscoverAI

DyscoverAI is an AI-powered screening tool designed to assist in the early detection of dyslexia and dysgraphia using handwriting image analysis. The system leverages machine learning models and a user-friendly web interface to provide non-diagnostic insights that can help guide further professional assessment.

> This is a screening tool, not a diagnostic solution. It does not replace professional medical or educational evaluation.


---


## Project Structure Overview

- `requirements.txt`: Backend Python dependencies
- `backend/`: Flask server, machine learning models, and preprocessing scripts
- `frontend/`: React + Vite application for user interface
- `frontend/package.json`: Frontend Node.js dependencies

---


## Setup Instructions

### 1. Clone the Repository and set up the Virtual Environment
```bash
git clone https://git.cs.bham.ac.uk/projects-2024-25/ixi171.git
cd fyp-draft-1

python3 -m venv venv
source venv/bin/activate
```


### 2. Backend Setup (Flask + Python)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

Once started, the backend runs on http://localhost:5000.
This terminal must remain open for the system to process predictions.



### 3. Frontend Setup (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

This will launch the frontend on http://localhost:5173/

---


## Features

- Upload handwriting images for dyslexia and dysgraphia screening  
- Probability-based thresholding for interpretability  
- GIF-guided walkthrough on the *How It Works* page  
- **Accessibility support:**
  - Dark mode toggle (moon icon in navigation bar)  
  - Scroll-to-top floating button  
  - Large, high-contrast UI elements  
- Linked educational resources (via Cleveland Clinic)  
- Robust error handling (e.g. wrong file type)

---

## Screenshots and Evaluation

Refer to **Appendix G** in the final report for:

- Full UI walkthrough  
- Accessibility highlights  
- Terminal logs and backend logic  
- Git commit history