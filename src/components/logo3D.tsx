"use client";
import React, { useRef } from "react";
import { ModelPreviews } from "@/components/model-preview";
import * as THREE from "three";

const Logo3D = () => {
  const modelGroupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);

  // Fetch SVG content
  const svgData = `<svg width="200" height="142" viewBox="0 0 200 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M108.617 6.10988C114.857 -1.20431 125.845 -2.07488 133.159 4.16541L192.004 54.37C199.318 60.6102 200.188 71.5983 193.948 78.9125C187.708 86.2267 176.72 87.0972 169.406 80.857L110.561 30.6524C103.247 24.4121 102.377 13.4241 108.617 6.10988Z" fill="#02165C" fill-opacity="0.8"/>
<path d="M113.879 136.664C107.136 129.811 107.226 118.788 114.08 112.046L170.383 56.6557C177.236 49.913 188.259 50.0031 195.001 56.8569C201.744 63.7107 201.654 74.7328 194.8 81.4755L138.497 136.866C131.644 143.608 120.621 143.518 113.879 136.664Z" fill="#02165C"/>
<path d="M91.3831 135.754C85.1429 143.069 74.1548 143.939 66.8406 137.699L7.99636 87.4943C0.682189 81.254 -0.188364 70.2659 6.05191 62.9518C12.2922 55.6376 23.2802 54.767 30.5944 61.0073L89.4387 111.212C96.7529 117.452 97.6234 128.44 91.3831 135.754Z" fill="black" fill-opacity="0.8"/>
<path d="M86.1213 5.19992C92.864 12.0537 92.7739 23.0759 85.9201 29.8185L29.6174 85.2085C22.7636 91.9512 11.7415 91.8611 4.99878 85.0073C-1.74389 78.1535 -1.65381 67.1314 5.19998 60.3887L61.5027 4.99871C68.3565 -1.74397 79.3787 -1.65389 86.1213 5.19992Z" fill="black"/>
</svg>
`;

  return (
    <div className="w-96 h-96">
      <ModelPreviews
        svgData={svgData}
        depth={6}
        modelRotationY={0}
        modelGroupRef={modelGroupRef}
        modelRef={modelRef}
        bevelEnabled={true}
        bevelThickness={0.5}
        bevelSize={0.3}
        bevelSegments={3}
        isHollowSvg={false}
        spread={0}
        useCustomColor={false}
        customColor="#000000"
        roughness={0.5}
        metalness={0.7}
        clearcoat={0.3}
        transmission={0}
        envMapIntensity={1}
        backgroundColor="#ffffff00"
        useEnvironment={false}
        environmentPreset="studio"
        customHdriUrl=""
        autoRotate={true}
        autoRotateSpeed={1}
        useBloom={false}
        bloomIntensity={0}
        bloomMipmapBlur={false}
        isMobile={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </div>
  );
};

export default Logo3D;
