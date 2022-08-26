import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

interface IRingProps {
  cameraPosition: number;
}

const Ring: React.FC<IRingProps> = ({ cameraPosition }) => {
  const itemsRef = useRef<any>([]);

  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      const constant = 8; //personaly defined constant
      let speed = cameraPosition >= 3 ? 12 : 0.8; //speed of rings
      let z =
        (i - constant) * (constant / 2) +
        ((elapsed * speed) % (constant / 2)) * 2;
      let dist = Math.abs(z) / 11;
      mesh.position.set(0, 0, -z - 10); //-z + 10 where 10 is added distance
      mesh.scale.set(1.5 - dist * 0.004, 1 - dist * 0.01, 1 - dist * 0.04);
    }
  });

  return (
    <>
      {Array.from(Array(35).keys()).map((v, i) => (
        <mesh
          castShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <torusGeometry args={[4.85, 0.05, 2, 6]} />
          {/*  <Html style={{ color: "thistle" }}>{i}</Html>*/}
          <meshStandardMaterial color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
};

export default Ring;
