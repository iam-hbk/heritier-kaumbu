"use client";
import React, { useRef } from "react";
import { ModelPreviews } from "@/components/model-preview";
import * as THREE from "three";

const Logo3D = () => {
  const modelGroupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);

  // Fetch SVG content
  const svgData = `<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.1 2.11713L2.4597 1.44815L2.45515 2.74676L3.1 3.4V2.11713Z" fill="#4E1013"/>
<path d="M0.648111 1.44815L0 2.11713V3.4L0.648111 2.74676V1.44815Z" fill="#4C1113"/>
<path d="M0.648111 0.912963V1.44815V2.74676L1.5539 1.8338L0.648111 0.912963Z" fill="#9F1A1E"/>
<path d="M2.4597 1.44815V0.912963L1.5539 1.8338L2.45515 2.74676L2.4597 1.44815Z" fill="#9F1A1E"/>
<path d="M2.4597 0.912963H0.648111L1.5539 1.8338L2.4597 0.912963Z" fill="#BF1C31"/>
<path d="M1.5539 0L0.648111 0.912963H2.4597L1.5539 0Z" fill="#E60F2C"/>
<path d="M2.17 2.75326L1.5539 2.14143L1.55 3.3651L2.17 2.75326Z" fill="#F1961A"/>
<path d="M0.93 2.75326L1.55 3.3651L1.5539 2.14143L0.93 2.75326Z" fill="#F6AD22"/>
</svg>`;

  return (
    <div className="w-96 h-96">
      <ModelPreviews
        svgData={svgData}
        depth={0.2}
        modelRotationY={0}
        modelGroupRef={modelGroupRef}
        modelRef={modelRef}
        bevelEnabled={false}
        bevelThickness={0}
        bevelSize={0}
        bevelSegments={0}
        isHollowSvg={false}
        spread={0}
        useCustomColor={false}
        customColor="#0000000"
        roughness={0.3}
        metalness={0.5}
        clearcoat={0}
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