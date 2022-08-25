import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { useRef } from "react";

const Road = () => {
  const itemsRef = useRef<any>([]);

  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      const constant = 7; //personaly defined constant
      let speed = 0.8; //speed of rings
      let z =
        (i - constant) * (constant / 2) +
        ((elapsed * speed) % (constant / 2)) * 2;
      let dist = Math.abs(z) / 2;
      mesh.position.set(0, 0, -z + 10); //-z + 10 where 10 is added distance
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);
    }
  });

  return (
    <>
      {Array.from(Array(20).keys()).map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <boxGeometry args={[0.5, 0.1, 2]} />
          {/*  <Html style={{ color: "thistle" }}>{i}</Html>*/}
          <meshStandardMaterial color={[1, 1, 1]} />
        </mesh>
      ))}
    </>
  );
};

export default Road;
