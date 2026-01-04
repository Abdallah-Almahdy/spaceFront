import React from "react";
import { FileText, Download } from "lucide-react";

export default function R1() {
  const pdfUrl =`http://127.0.0.1:8001/api/reports/daily?ts=${Date.now()}`;

  return (
    <section className="w-full mt-20 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      {/* استخدام bg-gray-100 كخلفية زي الهيدر أو حسب تصميمك */}
      <div className="w-full max-w-full mx-auto">
        {/* Header */}
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h2
            className="text-2xl sm:text-3xl text-gray-800 mb-2 sm:mb-0"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Our Daily Report
          </h2>

  
        </div>

        {/* PDF Viewer */}
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe
            src={pdfUrl}
            title="Daily Report PDF"
            className="w-full h-screen"
          />
        </div>
      </div>
    </section>
  );
}
