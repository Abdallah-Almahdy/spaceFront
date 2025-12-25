import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, checkAuth } from "../../../api/authApi";
import "./right.css";

function RightSide() {
  const navigate = useNavigate();

  // ===== Hooks يجب أن تكون في الأعلى =====
  const [checkingAuth, setCheckingAuth] = useState(true); // للتحقق من التوكن عند الدخول
  const [isLoading, setIsLoading] = useState(false); // Loading أثناء تسجيل الدخول
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ===== useEffect للتحقق من التوكن =====
  useEffect(() => {
    const verify = async () => {
      try {
        const user = await checkAuth();
        if (user) navigate("/", { replace: true });
      } catch (e) {
        // Not logged in → نكمل
      } finally {
        setCheckingAuth(false);
      }
    };
    verify();
  }, [navigate]);

  // ===== Loading قبل الفورم =====
  if (checkingAuth) {
    return (
      <div style={styles.overlay}>
        <div style={styles.container}>
          <div style={styles.spinner}></div>
          <h2 style={styles.title}>Checking session</h2>
          <p style={styles.subtitle}>
            Please wait while we verify your credentials
          </p>
        </div>
      </div>
    );
  }

  // ===== Handlers =====
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
    if (generalError) setGeneralError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");
    setIsLoading(true);

    // Client-side validation
    const validationErrors = {};
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Email is invalid";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (response && response.token) {
        const storage = formData.remember ? localStorage : sessionStorage;
        storage.setItem("authToken", response.token);
        

        navigate("/", { replace: true });
      } else {
        setGeneralError("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        const res = error.response;
        if (res.status === 401) setGeneralError("Invalid email or password");
        else if (res.data?.errors) {
          const formattedErrors = {};
          for (let key in res.data.errors) {
            formattedErrors[key] = Array.isArray(res.data.errors[key])
              ? res.data.errors[key].join(", ")
              : String(res.data.errors[key]);
          }
          setErrors(formattedErrors);
        } else if (res.data?.message) {
          const msg = res.data.message;
          if (typeof msg === "string") setGeneralError(msg);
          else if (typeof msg === "object")
            setGeneralError(Object.values(msg).flat().join(", "));
        } else setGeneralError("Login failed. Please try again.");
      } else if (error.request)
        setGeneralError(
          "No response from server. Check your internet connection."
        );
      else if (error.message) setGeneralError(error.message);
      else setGeneralError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // ===== JSX =====
  return (
    <div className="right-container">
      {/* رابط إنشاء الحساب */}
      <div className="account-prompt-top">
        <span className="no-account-text">Don't have an account?</span>
        <Link to="/register" className="create-account-btn">
          Create Account
        </Link>
      </div>

      {/* Login Form */}
      <div className="form-wrapper">
        <div className="form-header">
          <h1 className="main-title">WELCOME TO EgSA!</h1>
          <p className="subtitle">
            Sign in and be part of tomorrow's space discoveries.
          </p>
        </div>

        {generalError && (
          <div className="general-error">
            <p className="error-text">{generalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email */}
          <div className="form-group">
            <label className="input-label">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="homeinfo@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="input-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "error" : ""}`}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {errors.password && (
              <p className="field-error">{errors.password}</p>
            )}
          </div>

          {/* Options */}
          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">Remember me on this device</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button type="submit" disabled={isLoading} className="signin-button">
            {isLoading ? (
              <span className="loading-spinner">
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                  ></circle>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer-links-bottom">
        <a href="/terms">Terms & Conditions</a>
        <span className="separator">|</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}

// ===== Loading Styles =====
const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
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
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    maxWidth: "400px",
    width: "90%",
  },
  spinner: {
    width: "60px",
    height: "60px",
    margin: "0 auto 30px",
    border: "5px solid rgba(255,255,255,0.1)",
    borderTop: "5px solid #facc15",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  title: { fontSize: "1.8rem", marginBottom: "10px", fontWeight: "700" },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    marginBottom: "30px",
    fontSize: "1rem",
  },
};

// ===== Loading Animation =====
const styleTag = document.createElement("style");
styleTag.textContent = `
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`;
document.head.appendChild(styleTag);

export default RightSide;
