import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/configs"; // عدّل المسار حسب مشروعك

export default function SingleStationResults() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [result, setResult] = useState(null);
  const [allData, setAllData] = useState([]);
  const [timesOfDay, setTimesOfDay] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/forcasts");
      const data = response.data?.data?.flat() || [];
      setAllData(data);

      if (data.length > 0) {
        // أحدث تاريخ
        const dates = [
          ...new Set(data.map((item) => item.observationDate)),
        ].sort((a, b) => b.localeCompare(a));
        setSelectedDate(dates[0]);

        // كل الأوقات لذلك اليوم
        const times = data
          .filter((item) => item.observationDate === dates[0])
          .sort((a, b) => b.observationTime.localeCompare(a.observationTime))
          .map((item) => item.observationTime);
        setTimesOfDay(times);

        // عرض آخر وقت لليوم
        setSelectedTime(times[0]);
        const latest = data.find(
          (item) =>
            item.observationDate === dates[0] &&
            item.observationTime === times[0]
        );
        setResult(latest || null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    const found = allData.find(
      (item) =>
        item.observationDate === selectedDate && item.observationTime === time
    );
    setResult(found || null);
  };

  const calculateTotalOfDay = () => {
    if (!selectedDate) return 0;
    const itemsOfDay = allData.filter(
      (item) => item.observationDate === selectedDate
    );
    return itemsOfDay.length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            CAIRO Station - Single Detection Result
          </h1>
          <p className="text-gray-600">
            Select observation time for {selectedDate}
          </p>
        </header>

        {/* قائمة الأوقات لليوم */}
        {timesOfDay.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Available Times
            </h2>
            <div className="flex flex-wrap gap-3">
              {timesOfDay.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTimeSelect(time)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    time === selectedTime
                      ? "bg-blue-100 border-blue-500 text-blue-700 font-semibold"
                      : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* عرض النتيجة */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-center animate-fadeIn">
              <div className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-600 mb-6"></div>
              <p className="text-gray-700 text-xl">
                Loading detection result...
              </p>
            </div>
          </div>
        ) : result ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            {/* العنوان الرئيسي للنتيجة */}
            <div
              className={`p-6 text-white ${
                result.detectionType === "one"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : result.detectionType === "two"
                  ? "bg-gradient-to-r from-amber-600 to-orange-600"
                  : "bg-gradient-to-r from-green-600 to-teal-600"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Detection Result
                  </h2>
                  <p className="opacity-90 mt-2">
                    {result.observationDate} at {result.observationTime}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-sm opacity-90">Station</div>
                  <div className="text-xl font-bold">{result.station}</div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* العمود الأيسر */}
              <div>
                <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                  <img
                    src={`http://127.0.0.1:8001/${result.img}`}
                    alt={`Observation from ${result.station} on ${result.observationDate}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="bg-gray-50 p-3 text-center text-gray-600 text-sm">
                    Spectrogram for {result.observationDate} - Type{" "}
                    {result.detectionType === "one"
                      ? "I"
                      : result.detectionType === "two"
                      ? "II"
                      : "Both"}{" "}
                    Detection
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Observation Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Observation Date
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {result.observationDate}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Observation Time
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {result.observationTime}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Day of Year
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {result.dayOfYear}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Model Version
                      </div>
                      <div className="text-lg font-semibold text-blue-700">
                        {result.modelVersion}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* العمود الأيمن */}
              <div className="space-y-6">
                <div
                  className={`rounded-xl p-6 border ${
                    result.detectionType === "one"
                      ? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100"
                      : result.detectionType === "two"
                      ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100"
                      : "bg-gradient-to-br from-green-50 to-teal-50 border-green-100"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Detection Type
                    </h3>
                    <div
                      className={`px-4 py-2 rounded-lg text-white font-bold ${
                        result.detectionType === "one"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600"
                          : result.detectionType === "two"
                          ? "bg-gradient-to-r from-amber-600 to-orange-600"
                          : "bg-gradient-to-r from-green-600 to-teal-600"
                      }`}
                    >
                      {result.detectionType === "one"
                        ? "Type I"
                        : result.detectionType === "two"
                        ? "Type II"
                        : "Both"}
                    </div>
                  </div>
                  <p className="text-gray-700">{result.description}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Model Confidence
                    </h3>
                    <div className="text-3xl font-bold text-blue-700">
                      {parseFloat(result.avgConfidence).toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Total Observations Today
                  </h3>
                  <div className="text-3xl font-bold text-blue-800 text-center">
                    {calculateTotalOfDay()} bursts (all types)
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              No Detection Found
            </h3>
            <p className="text-gray-600 mb-6">
              No detection data available for {selectedDate} at CAIRO station.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
