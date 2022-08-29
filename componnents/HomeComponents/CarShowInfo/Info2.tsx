import React from "react";

import { Html } from "@react-three/drei";

import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";

interface IInfo2Props {
  cameraPosition: number;
  setCameraPosition: any;
}

const Info2: React.FC<IInfo2Props> = ({
  cameraPosition,
  setCameraPosition,
}) => {
  const [showButton, setShowButton] = React.useState(false);
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (cameraPosition !== 2) {
      setTimeout(() => {
        setShowButton(false);
      }, 1500);
    }
  }, [cameraPosition]);

  return (
    <>
      <Html as="div">
        <AnimatePresence>
          {cameraPosition === 2 && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              style={{
                color: "#ced4de",
                fontWeight: "bold",
                fontSize: width && width <= 700 ? "0.5rem" : "1rem",
                position: "relative",
                right: width && width <= 700 ? "unset" : "32rem",
                left: width && width <= 700 ? -150 : "unset",
                bottom: width && width <= 700 ? 120 : "20rem",
                width: width && width <= 700 ? 250 : 550,
              }}
            >
              <motion.h1
                onAnimationComplete={() => setShowButton(true)}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
              >
                Nano fiberd aluminum wheels for efortless movement
              </motion.h1>
              {showButton && (
                <motion.button
                  onClick={() => setCameraPosition(cameraPosition + 1)}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  initial={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    cursor: "pointer",
                    fontFamily: "Audiowide",
                    fontSize: width && width <= 700 ? "1rem" : "1.5rem",
                    backgroundColor: "unset",
                    color: "#ced4de",
                    border: "none",
                  }}
                >
                  {"See More >>>"}
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </>
  );
};

export default Info2;
