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
import Magnetosphere from "./pages/magnetosphere/index.jsx"; // ✅ صفحة Magnetosphere الجديدة
import Sun from "./pages/sun/index.jsx"; //  صفحة Sun الجديدة
import Instruments from "./pages/instruments/index.jsx" //صفحة instruments
import Missions from "./pages/missions/index.jsx" //صفحة missions
import Report from "./pages/report/index.jsx"
import Archive from "./pages/archive/index.jsx"
import ProtectedRoute from "./components/ProtectedRoute";
//  المكونات الإضافية
import ForgetPassword from "./components/ForgetPassword.js";
import ConfirmNumber from "./components/ConfirmNumber.js";
import BasicInfo from "./pages/basicinfo/index.jsx";
import Confirmpassword from "./pages/confirmpassword/index.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 الصفحة الرئيسية */}
        <Route path="/" element={<Home/>} />

        {/* ℹ️ الصفحات التعريفية */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* 👤 صفحات المستخدم */}
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/confirm-number" element={<ConfirmNumber />} />
        <Route path="/basic-info" element={<BasicInfo />} />

        {/*  صفحة Space Weather */}
        <Route path="/space-weather" element={<SpaceWeather />} />

        {/*  صفحة Scales */}
        <Route path="/scales" element={<Scales />} />

        {/*  صفحة Ionosphere */}
        <Route path="/ionosphere" element={<Ionosphere />} />

        {/*  صفحة Magnetosphere */}
        <Route path="/magnetosphere" element={<Magnetosphere />} />

        {/*  صفحة Sun */}
        <Route path="/sun" element={<Sun />} />

        {/*صفحة instruments */}
        <Route path="/instruments" element={<Instruments />} />

        {/*صفحة missions */}
        <Route path="/missions" element={<Missions />} />

        {/*صفحة archive */}
        <Route path="/archive" element={<Archive />} />

        {/*صفحة report */}
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
        {/*confirmpassword*/}
        <Route path="/confirmpassword" element={<Confirmpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
