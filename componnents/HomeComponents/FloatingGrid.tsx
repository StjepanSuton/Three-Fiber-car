import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import gridTexture from "../../public/assets/road_template/terrain/grid-texture.png";
import React from "react";
interface IFloatingGridProps {
  costumSpeed: number;
}

export const FloatingGrid: React.FC<IFloatingGridProps> = ({ costumSpeed }) => {
  const diffuse = useLoader(THREE.TextureLoader, gridTexture.src);

  React.useEffect(() => {
    diffuse.wrapS = THREE.RepeatWrapping;
    diffuse.wrapT = THREE.RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.repeat.set(30, 30);
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * (costumSpeed * 0.5);
    diffuse.offset.set(0, t);
  });

  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          color={[1, 1, 1]}
          opacity={0.15}
          map={diffuse}
          alphaMap={diffuse}
          transparent={true}
        />
      </mesh>
    </>
  );
};
