// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🏠 الصفحات
import Login from "./pages/login/index.jsx";
import Home from "./pages/home/index.jsx";
import AboutUsPage from "./pages/About/index.jsx";
import CreateAccount from "./pages/register/index.jsx";
import SpaceWeather from "./pages/space-weather/index.jsx";
import Scales from "./pages/scales/index.jsx";
import Ionosphere from "./pages/ionosphere/index.jsx";
import Magnetosphere from "./pages/magnetosphere/index.jsx";
import Sun from "./pages/sun/index.jsx";
import Instruments from "./pages/instruments/index.jsx";
import Missions from "./pages/missions/index.jsx";
import Report from "./pages/report/index.jsx";
import Archive from "./pages/archive/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

// المكونات الإضافية
import ForgetPassword from "./components/ForgetPassword.js";
import ConfirmNumber from "./components/ConfirmNumber.js";
import BasicInfo from "./pages/basicinfo/index.jsx";
import Confirmpassword from "./pages/confirmpassword/index.jsx";

// 🎛️ لوحة التحكم - الأبحاث والنشرات
import DashboardLayout from "./components/dashboard/DashboardLayout";
import PublicationTable from "./components/dashboard/PublicationTable";
import NewPublication from "./components/dashboard/NewPublication";
import EditPublication from "./components/dashboard/EditPublication";
import ReportTable from "./components/dashboard/ReportTable";
import Index from "./pages/model/index.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 الصفحة الرئيسية */}
        <Route path="/" element={<Home />} />

        {/* ℹ️ الصفحات التعريفية */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* 👤 صفحات المستخدم */}
        <Route path="/reg ister" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/confirm-number" element={<ConfirmNumber />} />
        <Route path="/basic-info" element={<BasicInfo />} />

        {/* 📊 صفحات البيانات والعلوم */}
        <Route path="/space-weather" element={<SpaceWeather />} />
        <Route path="/scales" element={<Scales />} />
        <Route path="/ionosphere" element={<Ionosphere />} />
        <Route path="/magnetosphere" element={<Magnetosphere />} />
        <Route path="/sun" element={<Sun />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/report" element={<Report />} />
        <Route path="/forecast" element={<Index />} />
        {/* 🔐 صفحة تأكيد كلمة المرور */}
        <Route path="/confirmpassword" element={<Confirmpassword />} />

        {/* 🎛️ لوحة التحكم - الأبحاث والنشرات */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PublicationTable />} />
          <Route path="publications" element={<PublicationTable />} />
          <Route path="new-publication" element={<NewPublication />} />
          <Route path="edit-publication/:id" element={<EditPublication />} />

          <Route path="report" element={<ReportTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
