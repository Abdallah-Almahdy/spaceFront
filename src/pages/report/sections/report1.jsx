import React, { useState } from "react";
import { Calendar, FileText, Eye } from "lucide-react";

export default function R1() {
  const [date, setDate] = useState("");

  return (
    <section className="w-full mt-20 px-4 sm:px-6 lg:px-8">
      {/* wrapper للتأكد من محاذاة العنوان والمربع الأبيض */}
      <div className="mx-auto max-w-7xl">
        {/* Header خارج المربع الأبيض ولكن يبدأ بنفس بداية محتواه */}
        <div className="mb-4">
          <h2
            className="text-2xl sm:text-3xl text-gray-800"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Report
          </h2>
          <p
            className="text-sm sm:text-base text-gray-500 mt-1"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Select a date to view or download the report
          </p>
        </div>

        {/* المربع الأبيض */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 lg:p-8">
          {/* Controls */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Date Picker */}
            <div className="flex items-center gap-2 w-full sm:w-fit">
              <Calendar size={18} className="text-[#FEBC2F]" />
              <span
                className="text-gray-700 text-sm font-body"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Date:
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="
                  bg-gray-200 
                  px-3 
                  py-2 
                  rounded-lg 
                  outline-none 
                  cursor-pointer
                  text-sm 
                  text-gray-700
                "
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                className="
                  font-body
                  flex 
                  items-center 
                  justify-center
                  gap-2 
                  px-4 
                  py-2 
                  rounded-lg 
                  bg-white 
                  border 
                  border-gray-300 
                  hover:bg-gray-50 
                  transition 
                  text-sm 
                  text-black
                "
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                <FileText size={16} className="text-[#FEBC2F]" />
                Export PDF
              </button>

              <button
                className="
                  font-body
                  flex 
                  items-center 
                  justify-center
                  gap-2 
                  px-4 
                  py-2 
                  rounded-lg 
                  bg-white 
                  border 
                  border-gray-300 
                  hover:bg-gray-50 
                  transition 
                  text-sm 
                  text-black
                "
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                <Eye size={16} className="text-[#FEBC2F]" />
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
