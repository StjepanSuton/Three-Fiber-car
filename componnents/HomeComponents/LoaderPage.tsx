import { Html } from "@react-three/drei";
import React from "react";

interface ILoadingPageProps {
  progress: number;
}

const LoaderPage: React.FC<ILoadingPageProps> = ({ progress }) => {
  return (
    <Html
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
      center
    >
      {progress} % loaded
    </Html>
  );
};

export default LoaderPage;
