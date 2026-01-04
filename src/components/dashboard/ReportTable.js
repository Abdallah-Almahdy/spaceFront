// components/dashboard/ReportTable.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/configs";

const ReportTable = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState({});
  const [searchDate, setSearchDate] = useState(""); // 🔍 search state

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/reports");

      if (response.data?.data && Array.isArray(response.data.data)) {
        setReports(
          response.data.data.map((item) => ({
            id: item.id,
            name: item.filename,
            created_at: item.created_at,
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 filter by created_at
  const filteredReports = reports.filter((report) => {
    if (!searchDate) return true;

    const reportDate = report.created_at ? report.created_at.split("T")[0] : "";

    return reportDate === searchDate;
  });

  const handleUpload = async (reportId, file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("report_id", reportId);

    try {
      await axiosInstance.post(`/reports/${reportId}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Report updated successfully ✅");
      fetchReports(); // 🔄 refresh list
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this report?")) return;

    setDeleteLoading((prev) => ({ ...prev, [id]: true }));

    try {
      await axiosInstance.delete(`/reports/${id}`);
      setReports((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete report");
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* 🔍 Search by date */}
      <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-56"
        />

        {searchDate && (
          <button
            onClick={() => setSearchDate("")}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Created At
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredReports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {report.name}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {report.created_at
                    ? new Date(report.created_at).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="px-6 py-4 text-center space-x-2">
                  {/* Show */}
                  <button
                    onClick={() =>
                      window.open(
                        `http://127.0.0.1:8001/api/reports/${
                          report.created_at.split("T")[0]
                        }`,
                        "_blank"
                      )
                    }
                    className="px-3 py-1.5 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Show
                  </button>

                  {/* Upload */}
                  <label className="px-3 py-1.5 rounded-md text-sm bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer">
                    Edit
                    <input
                      type="file"
                      hidden
                      onChange={(e) =>
                        handleUpload(report.id, e.target.files[0])
                      }
                    />
                  </label>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(report.id)}
                    disabled={deleteLoading[report.id]}
                    className={`px-3 py-1.5 rounded-md text-sm text-white
                      ${
                        deleteLoading[report.id]
                          ? "bg-red-300 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                  >
                    {deleteLoading[report.id] ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-10 text-gray-500">No reports found</div>
      )}
    </div>
  );
};

export default ReportTable;
