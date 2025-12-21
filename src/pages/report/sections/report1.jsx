import React from "react";
import { FileText } from "lucide-react";

export default function R1() {
  return (
    <section className="w-full mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4">
          <h2
            className="text-2xl sm:text-3xl text-gray-800"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Our Daily Report
          </h2>
        </div>

        {/* المربع الأبيض */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 lg:p-8">
          {/* زرار Export PDF */}
          <div className="flex justify-start">
            <button
              className="
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
          </div>
        </div>
      </div>
    </section>
  );
}
