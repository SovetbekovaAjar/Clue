import React from "react";
import AboutUs3 from "../components/AboutUs3";
import Footer from "../components/Footer";
import Video from "../components/Video";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <AboutUs3 />
      <Video />
      <Footer />
    </div>
  );
}

export default HomePage;
