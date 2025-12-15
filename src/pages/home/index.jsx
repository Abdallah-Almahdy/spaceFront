
import React from "react";
import Hero from "./sections/hero";
import Alerts from "./sections/alerts";
import LiveData from "./sections/liveData";
import SpaceWeatherNews from "./sections/News";
import  Contact from "./sections/contact";
export default function Home() {
    return(
    <div className="w-full">
        <Hero />
        <LiveData/>
        <Alerts/>
        <SpaceWeatherNews/>
         <Contact />
    </div>
    )

}