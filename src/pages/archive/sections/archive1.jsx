import React, { useState, useEffect } from "react";
import { Calendar, FileText } from "lucide-react";

const API_BASE = "http://127.0.0.1:8001/api";

export default function Archive1() {
  const [date, setDate] = useState("");
  const [pdfExists, setPdfExists] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const pdfUrl = date ? `${API_BASE}/reports/${date}` : null;
  const downloadUrl = date ? `${API_BASE}/reports/${date}/download` : null;

  useEffect(() => {
    if (!date) return;

    const checkPdf = async () => {
      setLoading(true);
      try {
        const res = await fetch(pdfUrl, { method: "HEAD" });
        setPdfExists(res.ok);
      } catch (err) {
        setPdfExists(false);
      } finally {
        setLoading(false);
      }
    };

    checkPdf();
  }, [date]);

  return (
    <section className="w-full mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl text-gray-800">Report</h2>
          <p className="text-sm text-gray-500 mt-1">
            Select a date to view or download the report
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Date Picker */}
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#FEBC2F]" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-200 px-3 py-2 rounded-lg outline-none"
              />
            </div>

            {/* Download */}
            {date && pdfExists && (
              <a
                href={downloadUrl}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-sm"
              >
                <FileText size={16} className="text-[#FEBC2F]" />
                Download PDF
              </a>
            )}
          </div>
        </div>

        {/* PDF Viewer */}
        {date && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            {loading ? (
              <p className="text-gray-500 text-center py-20">
                Checking report...
              </p>
            ) : pdfExists ? (
              <iframe
                src={pdfUrl}
                title="Daily Report"
                className="w-full h-[80vh] rounded-lg border"
              />
            ) : (
              <p className="text-red-500 text-center py-20">
                Report not found for this date.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
