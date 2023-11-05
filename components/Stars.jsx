import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Scroll, ScrollControls } from "@react-three/drei";
export const StarsComp = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: "0",
        width: "100vw",
        height: "50vh",
      }}
      camera={{ zoom: 1, position: [-10, -10, -40] }}
    >
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.9}
        penumbra={1}
        castShadow
        intensity={1}
        shadowBias={-0.0001}
      />

      <Stars
        radius={35}
        depth={15}
        count={300}
        opacity={0.7}
        factor={1.4}
        saturation={0}
        speed={0.5}
        fade
      />
    </Canvas>
  );
};
