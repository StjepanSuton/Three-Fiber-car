import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect } from "react";
import { Mesh } from "three";
import * as THREE from "three";

interface ICarProps {
  setCameraPosition: any;
  cameraPosition: number;
  carColor: string;
  enableRotate: boolean;
  setEnableRotate: any;
}

const Car: React.FC<ICarProps> = ({
  cameraPosition,
  setCameraPosition,
  carColor,
  enableRotate,
  setEnableRotate,
}) => {
  const gltf = useLoader(GLTFLoader, "assets/chevrolet_corvette_c7/scene.gltf");
  const [camerisLocking, setCameraIsLocking] = React.useState(true);
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
      state.camera.position.lerp(vec.set(0, 0, 3), 0.02);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 2) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-2, -5.5, 2.5), 0.009);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 3) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-4, 3, 5.5), 0.009);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 4) {
      setEnableRotate(true);
    }
    return null;
  });

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);

    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = false;
        object.receiveShadow = true;
        object.material.envMapIntensity = 5;
      }
    });
  }, [gltf]);

  React.useMemo(() => {
    let shownColor = "blue";
    switch (carColor) {
      case "🟣 ":
        shownColor = "purple";
        break;
      case "⚪️ ":
        shownColor = "white";
        break;
      case "🔵 ":
        shownColor = "blue";
        break;
      case "🟡 ":
        shownColor = "yellow";
        break;
      case "⚫️ ":
        shownColor = "black";
        break;
      default:
        shownColor = "blue";
    }
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        if (object.userData.name.includes("Paint")) {
          object.material.color.set(shownColor);
          object.updateMatrix();
        }
      }
    });
  }, [carColor]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    const speed = cameraPosition >= 3 ? 8 : 4;
    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = t * speed;
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
