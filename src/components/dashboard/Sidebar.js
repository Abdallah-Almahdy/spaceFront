// components/dashboard/Sidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Publications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      path: "/dashboard/publications",
    },
    {
      name: "Reports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
            clipRule="evenodd"
          />
        </svg>
      ),
      path: "/dashboard/report",
    },
   
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    if (item.path.startsWith("/dashboard")) {
      navigate(item.path);
    } else {
      window.location.href = item.path;
    }
  };

  const handleAddNewPublication = () => {
    navigate("/dashboard/new-publication");
  };

  return (
    <div className="w-64 bg-gradient-to-b from-white to-gray-50 shadow-lg h-screen flex flex-col border-r border-gray-200 sticky top-0">
      {/* رأس الـ Sidebar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            AH
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-800">Amira Hamdy</h2>
            <p className="text-sm text-gray-500">Space Researcher</p>
          </div>
        </div>
      </div>

      {/* قائمة التنقل */}
      <div className="flex-1 p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Dashboard
        </h3>
        <nav className="space-y-1 mb-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                activeItem === item.name
                  ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span
                className={`mr-3 ${
                  activeItem === item.name ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {item.icon}
              </span>
              {item.name}
              {activeItem === item.name && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </nav>

        {/* أزرار سريعة */}
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button
            onClick={handleAddNewPublication}
            className="w-full flex items-center justify-center px-4 py-3 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            New Publication
          </button>
        </div>
      </div>

      {/* تذييل الـ Sidebar */}
      <div className="p-4 border-t border-gray-200">
       
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
