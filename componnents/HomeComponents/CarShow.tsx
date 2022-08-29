import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import React from "react";
import Car from "./Car";
import Ring from "./Ring";
import Info0 from "./CarShowInfo/Info0";
import { FloatingGrid } from "./FloatingGrid";
import Info1 from "./CarShowInfo/Info1";
import Info2 from "./CarShowInfo/Info2";
import Info3 from "./CarShowInfo/Info3";
import Info4 from "./CarShowInfo/Info4";
import PlaygroundComponent from "./PlaygroundComponent/PlaygroundComponent";
import { motion } from "framer-motion-3d";

interface ICarShowProps {
  progress: number;
  cameraPosition: number;
  playgroundIsActive: boolean;
  setPlaygroundIsActive: any;
  setCameraPosition: any;
}

const CarShow: React.FC<ICarShowProps> = ({
  setCameraPosition,
  cameraPosition,
  progress,
  playgroundIsActive,
  setPlaygroundIsActive,
}) => {
  const [carColor, setCarColor] = React.useState("🟣 ");
  const [enableZoom, setEnableZoom] = React.useState(false);
  const [enableDrag, setEnableDrag] = React.useState(false);
  const [costumSpeed, setCostumSpeed] = React.useState(1);
  return (
    <>
      <PlaygroundComponent
        playgroundIsActive={playgroundIsActive}
        enableZoom={enableZoom}
        setEnableZoom={setEnableZoom}
        enableDrag={enableDrag}
        setEnableDrag={setEnableDrag}
        setCarColor={setCarColor}
        setCostumSpeed={setCostumSpeed}
      />
      <Info0
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <>
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
        <Info4
          setCarColor={setCarColor}
          cameraPosition={cameraPosition}
          setCameraPosition={setCameraPosition}
        />
      </>

      <OrbitControls
        enablePan={true}
        enableZoom={enableZoom}
        enableRotate={enableDrag}
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />
      {/* @ts-ignore */}
      <PerspectiveCamera makeDefault={true} fov={35} position={[0, 0, -25]} />
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
      <directionalLight
        color={[0.4, 0.5, 1]}
        intensity={5.5}
        position={[-5, 5, 8]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <spotLight
        color={[0.4, 0.5, 1]}
        intensity={3.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 8]}
        castShadow
        shadow-bias={-0.0001}
/>*/}

      <Car
        setPlaygroundIsActive={setPlaygroundIsActive}
        playgroundIsActive={playgroundIsActive}
        carColor={carColor}
        costumSpeed={costumSpeed}
        cameraPosition={cameraPosition}
        setCameraPosition={setCameraPosition}
      />
      <Ring costumSpeed={costumSpeed} cameraPosition={cameraPosition} />
      {/*  <Road cameraPosition={cameraPosition} /> */}
      <FloatingGrid costumSpeed={costumSpeed} />

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
