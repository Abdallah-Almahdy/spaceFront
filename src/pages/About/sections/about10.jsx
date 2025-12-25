import React, { useState, useEffect } from "react";
import axiosInstance from "../../../api/configs"; // تعديل المسار حسب هيكل مشروعك

const About10 = () => {
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Journal");

  // جلب البيانات من API
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        setError(null);

        // جلب البيانات من API
        const response = await axiosInstance.get("/publications");

        let publicationsData = [];

        // التعامل مع كلا الصيغتين من الاستجابة
        if (response.data && response.data.data) {
          publicationsData = response.data.data;
        } else if (Array.isArray(response.data)) {
          publicationsData = response.data;
        }

        setPublications(publicationsData);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError("Failed to load publications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // تصفية المنشورات حسب النوع
  useEffect(() => {
    if (publications.length > 0) {
      const filtered = publications.filter((pub) => pub.type === "Journal");
      setFilteredPublications(filtered);
    }
  }, [publications, activeFilter]);

  // عرض حالة التحميل
  if (loading) {
    return (
      <section className="w-full px-6 md:px-16 py-20 font-sora bg-gradient-to-b from-[#f6ecf7] to-white">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading publications...</p>
          </div>
        </div>
      </section>
    );
  }

  // عرض حالة الخطأ
  if (error) {
    return (
      <section className="w-full px-6 md:px-16 py-20 font-sora bg-gradient-to-b from-[#f6ecf7] to-white">
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
            <div>
              <h3 className="text-lg font-medium text-red-800">
                Error Loading Data
              </h3>
              <p className="text-red-700 mt-1">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // حساب الإحصائيات
  const journalCount = publications.filter((p) => p.type === "Journal").length;
  const conferenceCount = publications.filter(
    (p) => p.type === "Conference"
  ).length;

  return (
    <section className="w-full px-6 md:px-16 py-20 font-sora bg-gradient-to-b from-[#f6ecf7] to-white">
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left title */}
        <div>
          <h4 className="text-red-600 tracking-[4px] text-sm font-semibold">
            RESEARCH
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Journal
            <br />
            Publications
          </h1>

       
        </div>

        {/* Right description */}
        <div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            The journal publications focus on testing satellite components
            against radiation and improving ionospheric models. Published in
            IEEE, IJRTE, Advances in Space Research, and Open Astronomy, they
            provide validated scientific contributions to space technology and
            ionospheric science.
          </p>

       
        </div>
      </div>

      {/* LIST OF PUBLICATIONS */}
      <div className="space-y-8">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, index) => (
            <div
              key={pub.id || index}
              className="bg-white shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-2xl border border-gray-100"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  {pub.title || `Publication #${index + 1}`}
                </h3>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                  {pub.type}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                {pub.abstract || "No abstract available."}
              </p>

              <div className="flex justify-between items-center text-xs text-gray-500">
                <div>
                  {pub.created_at && (
                    <span>
                      Published: {new Date(pub.created_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <div className="text-gray-400">ID: #{pub.id}</div>
              </div>
            </div>
          ))
        ) : (
          // حالة عدم وجود منشورات
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
              No Journal Publications Found
            </h3>
            <p className="mt-2 text-gray-500 max-w-md mx-auto">
              No journal publications are currently available. Check back later
              or add new publications.
            </p>
          </div>
        )}
      </div>

     
    </section>
  );
};

export default About10;
