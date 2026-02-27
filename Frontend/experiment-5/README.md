🔹 AIM
To improve the performance of a React application by loading components only when required using lazy loading and code splitting.

🔹THEORY
In large React applications, loading all components at once increases the initial bundle size, leading to slower page load times. Lazy loading is a technique where components are loaded only when they are needed.

React provides the React.lazy() function to dynamically import components, and the Suspense component to display a fallback UI while the component is loading. This process is known as code splitting, where the application bundle is divided into smaller chunks.

By using lazy loading with routing, only the required component is fetched when a specific route is accessed. This improves application performance, reduces memory usage, and enhances the user experience.

🔹 STEPS / PROCEDURE
Install Node.js and create a new React project using Vite.
Open the project in a code editor (VS Code).
Create separate components such as Dashboard and Profile.
Implement lazy loading using React.lazy() for these components.
Wrap lazy-loaded components inside the Suspense component.
Configure routing using react-router-dom.
Apply CSS styling to center the content and improve UI appearance.
Run the application locally and verify that components load only when accessed.

🔹 COMMANDS USED

# Create React project using Vite
npm create vite@latest experiment-5

# Navigate to project folder
cd experiment-5

# Install dependencies
npm install

# Install React Router
npm install react-router-dom

# Start development server
npm run dev

🔹 SOURCE CODE

 
 -> main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
-> App.jsx

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Router>
      <div className="page">
        <div className="card">
          <h1 className="title">React Lazy Loading Demo</h1>
          <p className="subtitle">Components load only when required</p>

          <div className="nav">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </div>

          <Suspense fallback={<div className="loader">Loading Component...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;


-> Dashboard.jsx

function Dashboard() {
  return (
    <div className="content">
      <h2>Dashboard</h2>
      <p>This component is loaded lazily.</p>
    </div>
  );
}

export default Dashboard;

-> Profile.jsx

function Profile() {
  return (
    <div className="content">
      <h2>Profile</h2>
      <p>This component is loaded only when accessed.</p>
    </div>
  );
}

export default Profile;
 
 
-> App.css

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  width: 450px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.nav a {
  background: #4f46e5;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.content {
  background: #f3f4f6;
  padding: 20px;
  border-radius: 10px;
}

.loader {
  font-weight: bold;
  color: #4f46e5;
}


🔹 LEARNING OUTCOMES
After completing this experiment, the student will be able to:
Understand the concept of lazy loading in React.
Implement code splitting using React.lazy() and Suspense.
Improve application performance by reducing initial load time.

Use React Router for route-based component loading.

Design a simple and attractive UI for React applications.

Deploy and test React applications using a local development server.

<img width="1885" height="908" alt="image" src="https://github.com/user-attachments/assets/1049fe89-3240-4208-8afe-f8e3c44c0a75" />