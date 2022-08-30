import CarShow from "../componnents/HomeComponents/CarShow";
import { NextPage } from "next";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderPage from "../componnents/HomeComponents/LoaderPage";
import { Cloud, Sky, Sparkles, Stars, useProgress } from "@react-three/drei";
import NavigationComponent from "../componnents/NavigationComponent/NavigationComponent";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const { progress } = useProgress();
  const [cameraPosition, setCameraPosition] = React.useState<number>(0);
  const [playgroundIsActive, setPlaygroundIsActive] = React.useState(false);
  return (
    <motion.div
      style={{ backgroundColor: "black" }}
      animate={{ opacity: progress === 100 ? [0, 1] : 1 }}
      transition={{ duration: 2.5 }}
    >
      {progress === 100 && (
        <NavigationComponent
          setPlaygroundIsActive={setPlaygroundIsActive}
          setCameraPosition={setCameraPosition}
        />
      )}
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={<LoaderPage progress={progress} />}>
          <Stars
            radius={100}
            depth={100}
            count={25000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          <CarShow
            progress={progress}
            playgroundIsActive={playgroundIsActive}
            setPlaygroundIsActive={setPlaygroundIsActive}
            cameraPosition={cameraPosition}
            setCameraPosition={setCameraPosition}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Home;
