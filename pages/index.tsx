import CarShow from "../componnents/HomeComponents/CarShow";
import { NextPage } from "next";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};

export default Home;
