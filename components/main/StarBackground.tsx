"use client";

import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const ref = useRef<any>();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }) // Generate 5000 points within a sphere radius of 1.2
  );

  // Rotate the star points
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10; // Rotate stars along X-axis
      ref.current.rotation.y -= delta / 15; // Rotate stars along Y-axis
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3} // Each star has an x, y, z position
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff" // White stars
          size={0.002} // Adjust size of stars
          sizeAttenuation={true}
          depthWrite={false} // Ensures no depth writing for transparent points
        />
      </Points>
    </group>
  );
};

export default StarBackground;
