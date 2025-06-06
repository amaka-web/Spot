import React from "react";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import "./App.css"; 


function App() {
  return (
    <>
      <header className="logo-icon">
        <img src="/images/Logo.jpg" alt="Logo" />
      </header>
      <main>
        <Profile />
        <Gallery/>
    
      </main>
      <footer className="copy-container">
        <div className="copyright">
          <p>&copy; 2025 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
