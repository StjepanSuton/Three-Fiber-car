import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect } from "react";
import { Mesh } from "three";
import * as THREE from "three";

interface ICarProps {
  setCameraPosition: any;
  cameraPosition: number;
}

const Car: React.FC<ICarProps> = ({ cameraPosition, setCameraPosition }) => {
  const gltf = useLoader(GLTFLoader, "assets/chevrolet_corvette_c7/scene.gltf");
  //console.log(gltf.scene.children[0].children[0].children[0]);

  const ref = React.useRef<any>();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (cameraPosition === 0) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(3, 2, 10), 0.009);
      state.camera.updateProjectionMatrix();
    }

    if (cameraPosition === 1) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-2, 0, 3), 0.02);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 2) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-4, -5.5, 2.5), 0.009);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 3) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-28, 20.5, 22.5), 0.009);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(-1.55, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
    const speed = cameraPosition === 3 ? 8 : 4;
    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = t * speed;
    group.children[2].rotation.x = t * speed;
    group.children[4].rotation.x = t * speed;
    group.children[6].rotation.x = t * speed;
  });

  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Car;
