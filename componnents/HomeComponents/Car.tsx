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
  const gltf = useLoader(GLTFLoader, "assets/ferrari_488_challenge/scene.gltf");
  const [camerisLocking, setCameraIsLocking] = React.useState(true);
  //console.log(gltf.scene.children[0].children[0].children[0]);

  const ref = React.useRef<any>();
  const vec = new THREE.Vector3();
  useFrame((state) => {
    if (cameraPosition === 0) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(3, 2, 10), 0.012);
      state.camera.updateProjectionMatrix();
    }

    if (cameraPosition === 1) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(0, 0, -10), 0.012);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 2) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-2, -5.5, 2.5), 0.012);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 3) {
      state.camera.lookAt(ref.current.position);
      state.camera.position.lerp(vec.set(-4, 3, 8.5), 0.012);
      state.camera.updateProjectionMatrix();
    }
    if (cameraPosition === 4) {
      state.camera.position.lerp(vec.set(-14, 2.55, 2.5), 0.012);
      setTimeout(() => {
        setCameraPosition(5);
      }, 2000);
    }
    if (cameraPosition === 5) {
      setEnableRotate(true);
    }
    return null;
  });

  useEffect(() => {
    gltf.scene.scale.set(0.75, 0.75, 0.75);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.rotation.x = Math.PI;
    gltf.scene.rotation.z = Math.PI;

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
    const speed = cameraPosition >= 3 ? -18 : -4;
    let t = state.clock.getElapsedTime();
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        if (object.userData.name.includes("Wheel_FL")) {
          object.rotation.x = t * speed;
          if (
            object.userData.name.includes("Wheel_FL.001") ||
            object.userData.name.includes("Wheel_FL.002")
          ) {
            object.rotation.x = -t * speed;
          }
          object.updateMatrix();
        }
      }
    });
    /*
  
    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = t * speed;
    group.children[0].rotation.x = t * speed;
    group.children[2].rotation.x = t * speed;
    group.children[4].rotation.x = t * speed;
    group.children[6].rotation.x = t * speed; 
    */
  });

  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Car;
