// components/dashboard/PublicationTable.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/configs"; // استيراد axiosInstance

const PublicationTable = () => {
  const navigate = useNavigate();

  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState({});
  const [apiError, setApiError] = useState("");

  // جلب البيانات من API
  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      setError(null);
      setApiError("");

      // جلب البيانات من API الحقيقي
      const response = await axiosInstance.get("/publications");

      // التحقق من استجابة API (تحتوي على data.data)
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        // تحويل البيانات لتتناسب مع التطبيق
        const formattedData = response.data.data.map((pub) => ({
          id: pub.id,
          title: pub.title || "No Title",
          type: pub.type || "Journal", // استخدام type مباشرةً
          abstract: pub.abstract || "",
          created_at: pub.created_at,
          updated_at: pub.updated_at,
          // حساب السنة من created_at إذا لم تكن موجودة
          year:
            pub.year ||
            (pub.created_at
              ? new Date(pub.created_at).getFullYear()
              : new Date().getFullYear()),
        }));

        setPublications(formattedData);
      } else if (response.data && Array.isArray(response.data)) {
        // إذا كانت الاستجابة مصفوفة مباشرة (للتوافق مع الأنماط الأخرى)
        const formattedData = response.data.map((pub) => ({
          id: pub.id,
          title: pub.title || "No Title",
          type: pub.type || "Journal",
          abstract: pub.abstract || "",
          created_at: pub.created_at,
          updated_at: pub.updated_at,
          year:
            pub.year ||
            (pub.created_at
              ? new Date(pub.created_at).getFullYear()
              : new Date().getFullYear()),
        }));

        setPublications(formattedData);
      } else {
        throw new Error("Invalid data format received from API");
      }
    } catch (err) {
      console.error("Error fetching publications:", err);

      if (err.response) {
        const { data, status } = err.response;

        if (status === 401) {
          setError("Unauthorized. Please login again.");
          setTimeout(() => navigate("/login"), 2000);
        } else if (status === 404) {
          setError(
            "Publications endpoint not found. Please check API configuration."
          );
        } else if (status === 500) {
          setError("Server error. Please try again later.");
        } else {
          setError(
            data?.message ||
              `Failed to load publications (Status: ${status}). Please try again.`
          );
        }
      } else if (err.request) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // تصفية المنشورات
  const filteredPublications = publications.filter((pub) => {
    const matchesFilter = filter === "All" || pub.type === filter;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub.year && pub.year.toString().includes(searchTerm)) ||
      (pub.abstract &&
        pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // إحصائيات
  const journalCount = publications.filter((p) => p.type === "Journal").length;
  const conferenceCount = publications.filter(
    (p) => p.type === "Conference"
  ).length;

  // دالة للذهاب لصفحة الإضافة
  const handleAddPublication = () => {
    navigate("/dashboard/new-publication");
  };

  // دالة للحذف
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this publication?")) {
      return;
    }

    setDeleteLoading((prev) => ({ ...prev, [id]: true }));

    try {
      // إرسال طلب DELETE إلى API
      const response = await axiosInstance.delete(`/publications/${id}`);

      if (response.status === 200 || response.status === 204) {
        // نجاح الحذف
        alert("Publication deleted successfully!");

        // تحديث القائمة محلياً
        setPublications((prev) => prev.filter((pub) => pub.id !== id));
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (err) {
      console.error("Error deleting publication:", err);

      let errorMessage = "Failed to delete publication. Please try again.";

      if (err.response) {
        const { data, status } = err.response;

        if (status === 401) {
          errorMessage = "Unauthorized. Please login again.";
          setTimeout(() => navigate("/login"), 2000);
        } else if (status === 404) {
          errorMessage =
            "Publication not found. It may have been already deleted.";
        } else if (status === 403) {
          errorMessage =
            "You don't have permission to delete this publication.";
        } else if (status === 500) {
          errorMessage = "Server error. Please try again later.";
        } else {
          errorMessage = data?.message || errorMessage;
        }
      } else if (err.request) {
        errorMessage =
          "Network error. Please check your connection and try again.";
      }

      alert(errorMessage);
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  // دالة للتعديل (التوجيه إلى صفحة التعديل إذا كانت موجودة)
const handleEditPublication = (id) => {
  navigate(`/dashboard/edit-publication/${id}`);
};

  // دالة لعرض تفاصيل المنشور
  const handleViewPublication = (publication) => {
    const message = `
ID: ${publication.id}
Title: ${publication.title}
Type: ${publication.type}
Year: ${publication.year}
Abstract: ${publication.abstract}
Created: ${
      publication.created_at
        ? new Date(publication.created_at).toLocaleDateString()
        : "N/A"
    }
Updated: ${
      publication.updated_at
        ? new Date(publication.updated_at).toLocaleDateString()
        : "N/A"
    }
    `;

    alert(message);
  };

  // دالة لتحديث البيانات يدوياً
  const handleRefresh = () => {
    fetchPublications();
  };

  // عرض حالة التحميل
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading publications from API...</p>
          <p className="text-sm text-gray-500 mt-2">
            Fetching data from: {axiosInstance.defaults.baseURL}/publications
          </p>
        </div>
      </div>
    );
  }

  // عرض حالة الخطأ
  if (error && publications.length === 0) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-red-100 text-red-600 mr-4">
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
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-red-800">
              Error Loading Data
            </h3>
            <p className="text-red-700 mt-1">{error}</p>
            <div className="mt-3 flex space-x-3">
              <button
                onClick={handleRefresh}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Try Again
              </button>
              <button
                onClick={handleAddPublication}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Add First Publication
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* العنوان والإحصائيات */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Research Publications
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and track your academic publications
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Connected to: {axiosInstance.defaults.baseURL}
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Data
          </button>
        </div>
      </div>

      {/* عرض خطأ API إذا وجد مع البيانات */}
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

      {/* الإحصائيات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {publications.length}
              </h3>
              <p className="text-gray-600 text-sm">Total Publications</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {journalCount}
              </h3>
              <p className="text-gray-600 text-sm">Journal Articles</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {conferenceCount}
              </h3>
              <p className="text-gray-600 text-sm">Conference Papers</p>
            </div>
          </div>
        </div>
      </div>

      {/* شريط التحكم */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAddPublication}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center shadow-sm transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Research
            </button>
           
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* حقل البحث */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                placeholder="Search by title or abstract..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* أزرار التصفية */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                className={`px-4 py-2.5 font-medium ${
                  filter === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`px-4 py-2.5 font-medium border-l border-r border-gray-300 ${
                  filter === "Journal"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setFilter("Journal")}
              >
                Journal
              </button>
              <button
                className={`px-4 py-2.5 font-medium ${
                  filter === "Conference"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setFilter("Conference")}
              >
                Conference
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPublications.map((pub) => (
                <tr
                  key={pub.id}
                  className="hover:bg-blue-50 transition duration-150"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">
                        {pub.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        ID: #{pub.id.toString().padStart(3, "0")}
                      </div>
                      {pub.abstract && (
                        <div className="text-xs text-gray-500 mt-1 truncate max-w-xs">
                          {pub.abstract.substring(0, 80)}...
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        pub.type === "Journal"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {pub.type === "Journal" ? (
                        <svg
                          className="mr-1.5 h-2 w-2 text-green-800"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      ) : (
                        <svg
                          className="mr-1.5 h-2 w-2 text-purple-800"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      )}
                      {pub.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-medium">{pub.year}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {pub.created_at
                        ? new Date(pub.created_at).toLocaleDateString()
                        : "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleViewPublication(pub)}
                        className="text-gray-600 hover:text-gray-900 p-1.5 rounded hover:bg-gray-100 transition duration-150"
                        title="View Details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEditPublication(pub.id)}
                        className="text-blue-600 hover:text-blue-900 p-1.5 rounded hover:bg-blue-50 transition duration-150"
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(pub.id)}
                        disabled={deleteLoading[pub.id]}
                        className={`p-1.5 rounded transition duration-150 ${
                          deleteLoading[pub.id]
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-red-600 hover:text-red-900 hover:bg-red-50"
                        }`}
                        title="Delete"
                      >
                        {deleteLoading[pub.id] ? (
                          <svg
                            className="animate-spin h-5 w-5"
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
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* تذييل الجدول */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing{" "}
            <span className="font-medium">{filteredPublications.length}</span>{" "}
            of <span className="font-medium">{publications.length}</span>{" "}
            publications
            {searchTerm && (
              <span className="ml-2 text-blue-600">
                (filtered by: "{searchTerm}")
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <span className="px-3 py-1.5 text-sm text-gray-700">
              Page 1 of 1
            </span>
            <button
              className="px-3 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* رسالة إذا لم توجد نتائج */}
      {filteredPublications.length === 0 && publications.length > 0 && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No matching publications
          </h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            No publications match your current filter or search criteria.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilter("All");
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* رسالة إذا لم توجد منشورات على الإطلاق */}
      {publications.length === 0 && !loading && !error && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-16 w-16 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No publications yet
          </h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            Start by adding your first research publication.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={handleAddPublication}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium"
            >
              Add First Publication
            </button>
            <button
              onClick={handleRefresh}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-lg font-medium"
            >
              Check Again
            </button>
          </div>
        </div>
      )}

    
    </div>
  );
};

export default PublicationTable;
