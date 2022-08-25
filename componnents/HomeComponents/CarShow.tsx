import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import * as THREE from "three";

import { BlendFunction } from "postprocessing";

import React from "react";
import Car from "./Car";
import Ground from "./Ground";
import Ring from "./Ring";
import { FloatingGrid } from "./FloatingGrid";
import Road from "./Road";

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      {/* @ts-ignore */}
      <PerspectiveCamera makeDefault={true} fov={50} position={[3, 2, 5]} />
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
        intensity={10.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 8]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Car />
      <Ground />
      <Ring />
      <Road />
      {/* <FloatingGrid />*/}
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
