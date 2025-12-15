import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./right.css";
import { registerUser } from "../../../api/authApi";
import Select from "react-select";

export default function RightSide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    level: "",
    Affiliation: "",
    phone: "",
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        ); // API مجاني للدول
        const data = await res.json();
        // نرتب الدول أبجديًا
        const countryList = data
          .map((c) => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(countryList);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setGeneralError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);

      if (result && result.token) {
        setErrors({});
        setGeneralError("");

        setShowSuccessPopup(true);

        let counter = 5;
        setCountdown(counter);

        const countdownInterval = setInterval(() => {
          counter--;
          setCountdown(counter);

          if (counter <= 0) {
            clearInterval(countdownInterval);
            navigate("/login");
          }
        }, 1000);

        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate("/login");
        }, 5000);
      }
    } catch (err) {
      if (err && typeof err === "object") {
        setErrors(err);
      } else if (typeof err === "string") {
        setGeneralError(err);
      } else {
        setGeneralError("An unexpected error occurred");
      }
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    navigate("/login");
  };

  return (
    <div className="right-container">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <button className="success-popup-close" onClick={closePopup}>
            ×
          </button>
          <div className="success-popup-content">
            <h3>🎉 Account Created Successfully!</h3>
            <p>
              Your email <strong>{formData.email}</strong> has been registered
              successfully.
              <br />
              You will be redirected to login page in{" "}
              <span className="countdown">{countdown}</span> seconds.
            </p>
          </div>
        </div>
      )}

      <div className="form-wrapper">
        <div className="form-header">
          <div className="account-prompt">
            <span className="no-account">Already have an account</span>
            <span className="divider">/</span>
            <Link to="/login" className="sign-in-link">
              Sign in
            </Link>
          </div>

          <div className="form-title-section">
            <h1 className="form-main-title">YOUR BASIC INFORMATIONS</h1>
            <p className="form-subtitle">Please fill out the form below</p>
          </div>
        </div>

        {generalError && (
          <div className="general-error">
            <p className="text-red-600 font-semibold">{generalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="information-form">
          {/* الاسم */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              />
              {errors.name && Array.isArray(errors.name) && (
                <p className="field-error">{errors.name[0]}</p>
              )}
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              {errors.email && Array.isArray(errors.email) && (
                <p className="field-error">{errors.email[0]}</p>
              )}
            </div>
          </div>

          {/* الصف الأول: Country و Phone جنب بعض */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Country</label>
              <Select
                className="form-select"
                name="country"
                value={
                  formData.country
                    ? { label: formData.country, value: formData.country }
                    : null
                }
                onChange={(selectedOption) =>
                  handleChange({
                    target: {
                      name: "country",
                      value: selectedOption?.value || "",
                    },
                  })
                }
                options={countries.map((c) => ({ label: c, value: c }))}
                placeholder="Select or search country..."
                isSearchable
              />
              {errors.country && Array.isArray(errors.country) && (
                <p className="field-error">{errors.country[0]}</p>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-input"
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone"
                onChange={handleChange}
              />
              {errors.phone && Array.isArray(errors.phone) && (
                <p className="field-error">{errors.phone[0]}</p>
              )}
            </div>
          </div>

          {/* الصف الثاني: Level و Affiliation جنب بعض */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Level</label>
              <input
                className="form-input"
                type="text"
                name="level"
                value={formData.level}
                placeholder="Level"
                onChange={handleChange}
              />
              {errors.level && Array.isArray(errors.level) && (
                <p className="field-error">{errors.level[0]}</p>
              )}
            </div>

            <div className="form-group">
              <label>Affiliation</label>
              <input
                className="form-input"
                type="text"
                name="affiliation"
                value={formData.Affiliation}
                placeholder="Affiliation"
                onChange={handleChange}
              />
              {errors.affiliation && Array.isArray(errors.affiliation) && (
                <p className="field-error">{errors.affiliation[0]}</p>
              )}
            </div>
          </div>

          {/* الصف الثالث: Password و Confirm Password جنب بعض */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
              />
              {errors.password && Array.isArray(errors.password) && (
                <p className="field-error">{errors.password[0]}</p>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                className="form-input"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {errors.confirmPassword &&
                Array.isArray(errors.confirmPassword) && (
                  <p className="field-error">{errors.confirmPassword[0]}</p>
                )}
            </div>
          </div>

          {/* زر الإنشاء */}
          <div className="form-row">
            <button className="submit-button" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
