"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import StarBackground from "./StarBackground";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Blackhole Video Background */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-[-1]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Starry Background for the Rest of the Page */}
      <div className="absolute top-[300px] left-0 w-full h-[calc(100vh-300px)] z-[-2]">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <StarBackground />
        </Canvas>

        {/* Hero overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
