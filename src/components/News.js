import React from 'react';
import img2 from "../assets/space2.png"
const img3 = require("../assets/space4.png")
const SpaceWeatherNews = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1">
        {/* القسم الذي يحتوي على العنوان والنص */}
        <div className="flex flex-col items-start mb-12">
          <h1 className="text-4xl font-bold mb-4">Space Weather News</h1>
          <p className="text-lg text-left">Stay informed with the latest updates on solar activity, geomagnetic events, and their effects on Earth.</p>
        </div>
        
        {/* البطاقة التي تحتوي على الأخبار */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img2} alt="Solar Flare" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Powerful Solar Flare Detected</h3>
              <p className="text-gray-700">An X1.5-class solar flare erupted from the Sun's active region AR8542, causing temporary radio blackouts in parts of South America. Space agencies are monitoring potential impacts on scientific communications and navigation systems.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={require("../assets/space3.jpg")} alt="Geomagnetic Storm" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Geomagnetic Storm Reaches G3 Level</h3>
              <p className="text-gray-700">A strong geomagnetic storm, driven by a coronal mass ejection (CME), has pushed the KP index to "3" – high latitudes regions may experience auroras, and minor fluctuations in power grids are possible.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img3} alt="Radiation Levels" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Radiation Levels Rise in the Outer Belt</h3>
              <p className="text-gray-700">High-energy electron flux in Earth's outer radiation belt has been rising, posing a risk to satellites' electronics. Engineers are implementing protective protocols to mitigate the impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceWeatherNews;




