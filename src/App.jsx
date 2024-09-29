import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNameSubmit = () => {
    if (name) {
      setNameEntered(true);
    } else {
      alert("Iltimos, ismingizni kiriting! 🌹");
    }
  };

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="love-letter-container">
      <h1 className="title">Surprise for You!</h1>
      {!nameEntered ? (
        <div className="input-container">
          <label htmlFor="name" className="input-label">
            Ismingizni kiriting:
          </label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Romantik ismingizni yozing..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-button" onClick={handleNameSubmit}>
            Yuborish
          </button>
        </div>
      ) : (
        <div className="welcome-container">
          <h2 className="welcome-message">Xush kelibsiz, {name}! 💖</h2>
          <div
            className={`envelope ${showMessage ? "open" : ""}`}
            onClick={handleClick}
          >
            <div className="flap"></div>
            <div className="letter">
              {showMessage ? (
                <p className="message">
                  {name}, You are the Moon to my dark sky! ❤️
                </p>
              ) : (
                <p className="message-placeholder">Open me!</p>
              )}
            </div>
          </div>
          <div className="hearts-animation">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
