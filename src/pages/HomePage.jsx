import React from "react";
import AboutUs3 from "../components/AboutUs3";
import Footer from "../components/Footer";
import Video from "../components/Video";
import AboutUs4 from "../components/AboutUs4";
import AboutUS1 from "../components/AboutUs1";
import AboutUs2 from "../components/AboutUs2";
import Slider from "../components/Slider";


function HomePage() {
  return (
    <div>
      <AboutUS1 />
      <AboutUs3 />
      <AboutUs4 />
      <AboutUs2 />
      <Slider />
      <AboutUs3 />
      <Video />
      <Footer />
      {/* <Hero /> */}
    </div>
  );
}

export default HomePage;
