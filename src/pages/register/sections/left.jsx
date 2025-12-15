import React from "react";
import "./left.css";

export default function LeftSide() {
  return (
    <div className="left-container">
      <div className="left-content">
        <div className="logo-section">
          <div className="logo">LOGO</div>
        </div>

        <div className="slogan-section">
          <h1 className="slogan-main">
            DO IT <span className="highlight">NOW</span>
          </h1>
          <h2 className="slogan-sub">
            DISCOVER <span className="highlight">BEYOND</span>
          </h2>
          <h2 className="slogan-sub">
            TOUCH <span className="highlight">INFINITY</span>
          </h2>
        </div>

        <div className="photo-section">
          <div className="photo-frame">
            <div className="photo-placeholder">
              <span className="photo-text">Firm in Something</span>
              <span className="photo-subtext">Photo</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="copyright">
            &copy; 2024 Your Company. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a> |
            <a href="/privacy"> Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
