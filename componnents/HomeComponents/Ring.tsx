import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

interface IRingProps {
  cameraPosition: number;
  costumSpeed: number;
}

const Ring: React.FC<IRingProps> = ({ cameraPosition, costumSpeed }) => {
  const itemsRef = useRef<any>([]);

  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      const constant = 10; //personaly defined constant
      let speed = cameraPosition >= 3 ? 4 : 0.8 * costumSpeed; //speed of rings
      let z =
        (i - constant) * (constant / 2) +
        ((elapsed * speed) % (constant / 2)) * 2;

      let dist = Math.abs(z);
      mesh.position.set(0, 0, -z); //-z + 10 where 10 is added distance
      mesh.scale.set(1 - dist * 0.02, 0.5 - dist * 0.005, 1);
    }
  });

  return (
    <>
      {Array.from(Array(20).keys()).map((v, i) => {
        if (i <= 10 && i > 6) {
          return (
            <mesh
              castShadow
              position={[0, 0, 0]}
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <torusGeometry args={[4.85, 0.15, 4, 6]} />
              {/*  <Html style={{ color: "thistle" }}>{i}</Html>*/}
              <meshStandardMaterial color={[0, 0, 0]} />
            </mesh>
          );
        } else {
          return (
            <mesh
              position={[0, 0, 0]}
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <torusGeometry args={[4.85, 0.15, 4, 6]} />
              {/*  <Html style={{ color: "thistle" }}>{i}</Html>*/}
              <meshStandardMaterial color={[0, 0, 0]} />
            </mesh>
          );
        }
      })}
    </>
  );
};

export default Ring;
