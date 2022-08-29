import CarShow from "../componnents/HomeComponents/CarShow";
import { NextPage } from "next";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderPage from "../componnents/HomeComponents/LoaderPage";
import { useProgress } from "@react-three/drei";

const Home: NextPage = () => {
  const { progress } = useProgress();

  return (
    <Canvas shadows dpr={2}>
      <Suspense fallback={<LoaderPage progress={progress} />}>
        <CarShow />
      </Suspense>
    </Canvas>
  );
};

export default Home;
