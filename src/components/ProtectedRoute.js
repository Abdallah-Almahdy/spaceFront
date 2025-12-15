// ProtectedRoute.js - نسخة مبسطة
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../api/authApi";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const user = await checkAuth();
      setIsAuth(!!user);
      setLoading(false);
    };
    verify();
  }, []);

  if (loading) {
    return (
      <div style={styles.overlay}>
        <div style={styles.container}>
          <div style={styles.spinner}></div>
          <h2 style={styles.title}>Securing Your Access</h2>
          <p style={styles.subtitle}>
            Please wait while we verify your credentials
          </p>
          <div style={styles.progress}>
            <div style={styles.progressBar}></div>
          </div>
        </div>
      </div>
    );
  }
  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (!isAuth) return <Navigate to="/login" />;

  return children;
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    textAlign: "center",
    color: "white",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    maxWidth: "400px",
    width: "90%",
  },
  spinner: {
    width: "60px",
    height: "60px",
    margin: "0 auto 30px",
    border: "5px solid rgba(255, 255, 255, 0.1)",
    borderTop: "5px solid #facc15",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    fontWeight: "700",
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "30px",
    fontSize: "1rem",
  },
  progress: {
    width: "100%",
    height: "4px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "2px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    width: "30%",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    borderRadius: "2px",
    animation: "progress 1.5s ease-in-out infinite",
  },
};

// أضف هذه الأنيميشن في CSS العام لتطبيقك
const style = document.createElement("style");
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes progress {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }
`;
document.head.appendChild(style);
