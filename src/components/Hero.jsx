import React from "react";
import shareVideo from "../assets/share.mp4";
function Hero() {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video src={shareVideo} loop autoPlay />
      </div>
    </div>
  );
}

export default Hero;
