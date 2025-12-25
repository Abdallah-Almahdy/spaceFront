// components/dashboard/DashboardLayout.js
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const [activeItem, setActiveItem] = useState("Publications");
  const location = useLocation();

  // تحديد إذا كنا في صفحة إضافة جديدة
  const isNewPublicationPage = location.pathname.includes("new-publication");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* الشريط الجانبي - يظهر فقط إذا لم نكن في صفحة إضافة جديدة */}
      {!isNewPublicationPage && (
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      )}

      {/* المحتوى الرئيسي */}
      <main
        className={`flex-1 overflow-auto ${isNewPublicationPage ? "" : "p-6"}`}
      >
        <Outlet context={{ activeItem, setActiveItem }} />
      </main>
    </div>
  );
};

export default DashboardLayout;
