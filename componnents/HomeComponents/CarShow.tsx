import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import React from "react";
import Car from "./Car";
import Ground from "./Ground";
import Ring from "./Ring";
import Road from "./Road";
import Info0 from "./CarShowInfo/Info0";
import { FloatingGrid } from "./FloatingGrid";
import Info1 from "./CarShowInfo/Info1";
import Info2 from "./CarShowInfo/Info2";
import Info3 from "./CarShowInfo/Info3";

const CarShow = () => {
  const [cameraPosition, setCameraPosition] = React.useState<number>(0);

  return (
    <>
      <Stats />
      <Info0
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <Info1
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <Info2
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <Info3
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />
      {/* @ts-ignore */}
      <PerspectiveCamera makeDefault={true} fov={40} position={[0, 0, -35]} />
      <color args={[0, 0, 0]} attach="background" />
      {/*     <spotLight
        color={[1, 0.25, 0.7]}
        intensity={5.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
  />*/}
      <spotLight
        color={[0.4, 0.5, 1]}
        intensity={5.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 8]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Car
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <Ring cameraPosition={cameraPosition} />
      <Road cameraPosition={cameraPosition} />
      <FloatingGrid />

      {/*  <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.9} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
</EffectComposer>*/}
    </>
  );
};

export default CarShow;