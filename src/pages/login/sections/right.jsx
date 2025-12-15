import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, checkAuth } from "../../../api/authApi";
import "./right.css";

function RightSide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });



  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

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
        // حفظ token و user
        const storage = formData.remember ? localStorage : sessionStorage;
        storage.setItem("authToken", response.token);
        storage.setItem("userData", JSON.stringify(response.user));

        navigate("/");
      } else {
        setGeneralError("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);

      // تحويل أي object errors لـ strings
      if (error.response) {
        const res = error.response;

        if (res.status === 401) {
          setGeneralError("Invalid email or password");
        } else if (res.data?.errors) {
          const formattedErrors = {};
          for (let key in res.data.errors) {
            if (Array.isArray(res.data.errors[key])) {
              formattedErrors[key] = res.data.errors[key].join(", ");
            } else {
              formattedErrors[key] = String(res.data.errors[key]);
            }
          }
          setErrors(formattedErrors);
        } else if (res.data?.message) {
          const msg = res.data.message;
          if (typeof msg === "string") setGeneralError(msg);
          else if (typeof msg === "object")
            setGeneralError(Object.values(msg).flat().join(", "));
          else setGeneralError("Login failed. Please try again.");
        } else {
          setGeneralError("Login failed. Please try again.");
        }
      } else if (error.request) {
        setGeneralError(
          "No response from server. Check your internet connection."
        );
      } else if (error.message) {
        setGeneralError(error.message);
      } else {
        setGeneralError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="right-container">
      {/* رابط إنشاء الحساب */}
      <div className="account-prompt-top">
        <span className="no-account-text">Don't have an account?</span>
        <Link to="/create-account" className="create-account-btn">
          Create Account
        </Link>
      </div>

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

      {/* Footer Links */}
      <div className="footer-links-bottom">
        <a href="/terms">Terms & Conditions</a>
        <span className="separator">|</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}

export default RightSide;
