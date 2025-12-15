// Home.jsx
import React from "react";
import Hero from "./Hero";
import Alerts from "./Alerts";
import LiveData from "./LiveData";
import News from "./News";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Alerts />
      <LiveData />
      <News />
    </div>
  );
};

export default Home;
