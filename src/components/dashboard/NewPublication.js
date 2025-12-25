// components/dashboard/NewPublication.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/configs";

const NewPublication = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "Journal",
    abstract: "", // تغيير من description إلى abstract
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // حذف خطأ الحقل عند التعديل
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // حذف خطأ API عند التعديل
    if (apiError) {
      setApiError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    }

    if (!formData.abstract.trim()) {
      newErrors.abstract = "Abstract is required";
    } else if (formData.abstract.trim().length < 20) {
      newErrors.abstract = "Abstract must be at least 20 characters";
    }

    // التحقق من أن النوع إما Journal أو Conference فقط
    const validTypes = ["Journal", "Conference"];
    if (!validTypes.includes(formData.type)) {
      newErrors.type = "Type must be either Journal or Conference";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      // تحضير البيانات للإرسال (الحقول المطلوبة فقط)
      const publicationData = {
        title: formData.title.trim(),
        abstract: formData.abstract.trim(),
        type: formData.type,
      };

      // إرسال البيانات إلى API
      const response = await axiosInstance.post(
        "/publications",
        publicationData
      );

      if (response.status === 201 || response.status === 200) {
        // نجاح الإضافة
        alert("Publication added successfully!");
        navigate("/dashboard/publications");
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding publication:", error);

      if (error.response) {
        // خطأ من الخادم
        const { data, status } = error.response;

        if (status === 401) {
          setApiError("Unauthorized. Please login again.");
          setTimeout(() => navigate("/login"), 2000);
        } else if (status === 422) {
          // أخطاء التحقق من Laravel
          if (data.errors) {
            const validationErrors = {};
            Object.keys(data.errors).forEach((key) => {
              validationErrors[key] = data.errors[key][0];
            });
            setErrors(validationErrors);
          } else {
            setApiError(
              data.message || "Validation failed. Please check your input."
            );
          }
        } else if (status === 500) {
          setApiError("Server error. Please try again later.");
        } else {
          setApiError(
            data?.message || "Failed to add publication. Please try again."
          );
        }
      } else if (error.request) {
        // لم يتم استلام رد
        setApiError(
          "Network error. Please check your connection and try again."
        );
      } else {
        // خطأ في الإعداد
        setApiError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      navigate("/dashboard/publications");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* شريط التنقل العلوي */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/dashboard/publications")}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Publications
        </button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add New Publication
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in the required details below to add a new research
              publication
            </p>
          </div>
        </div>
      </div>

      {/* عرض خطأ API إذا وجد */}
      {apiError && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-red-800 font-medium">{apiError}</span>
          </div>
        </div>
      )}

      {/* محتوى الصفحة */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <form onSubmit={handleSubmit}>
          {/* قسم المعلومات الأساسية */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Required Information
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* العنوان */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publication Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter the full title of the publication"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* النوع */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publication Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.type ? "border-red-300" : "border-gray-300"
                  }`}
                >
                  <option value="Journal">Journal Article</option>
                  <option value="Conference">Conference Paper</option>
                </select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-600">{errors.type}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Select either Journal or Conference
                </p>
              </div>
            </div>
          </div>

          {/* قسم الوصف */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Abstract</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Abstract <span className="text-red-500">*</span>
              </label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.abstract ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Provide a detailed abstract of the publication..."
              />
              {errors.abstract && (
                <p className="mt-1 text-sm text-red-600">{errors.abstract}</p>
              )}
              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>Briefly summarize the key points and findings</span>
                <span>{formData.abstract.length}/5000 characters</span>
              </div>
            </div>
          </div>

      

          {/* أزرار الإرسال */}
          <div className="flex flex-col sm:flex-row justify-between pt-6 border-t border-gray-200">
            <div className="mb-4 sm:mb-0">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-200"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <p className="mt-2 text-sm text-gray-500">
                All unsaved changes will be lost
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Adding Publication...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Publication
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default NewPublication;
