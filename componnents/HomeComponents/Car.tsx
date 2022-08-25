import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect } from "react";
import { Mesh } from "three";

const Car = () => {
  const gltf = useLoader(GLTFLoader, "assets/chevrolet_corvette_c7/scene.gltf");
  //console.log(gltf.scene.children[0].children[0].children[0]);
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
    const speed = 4;
    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = t * speed;
    group.children[2].rotation.x = t * speed;
    group.children[4].rotation.x = t * speed;
    group.children[6].rotation.x = t * speed;
  });

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

export default Car;
