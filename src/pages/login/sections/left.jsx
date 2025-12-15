import React from "react";
import "./left.css";

export default function LeftSide() {
  return (
    <div className="left-container">
      <div className="left-content">
        {/* LOGO في الأعلى اليسار */}
        <div className="logo-header">
          <div className="logo">LOGO</div>
        </div>

        {/* الشعار الرئيسي */}
        <div className="main-slogan">
          <div className="slogan-line">
            <span className="slogan-text">DO IT</span>
            <span className="slogan-highlight">NOW</span>
          </div>
          <div className="slogan-line">
            <span className="slogan-text">DISCOVER</span>
            <span className="slogan-highlight">BEYOND</span>
          </div>
          <div className="slogan-line">
            <span className="slogan-text">TOUCH</span>
            <span className="slogan-highlight">INFINITY</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <span className="separator">|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
