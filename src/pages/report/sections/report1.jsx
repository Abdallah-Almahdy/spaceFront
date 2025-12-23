import React from "react";
import { FileText, Download } from "lucide-react";

export default function R1() {
  const pdfUrl = "http://127.0.0.1:8001/api/reports/daily";

  return (
    <section className="w-full mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2
            className="text-2xl sm:text-3xl text-gray-800"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Our Daily Report
          </h2>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-lg
              border border-gray-300
              text-sm
              hover:bg-gray-50
            "
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe
            src={pdfUrl}
            title="Daily Report PDF"
            className="w-full h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
}
