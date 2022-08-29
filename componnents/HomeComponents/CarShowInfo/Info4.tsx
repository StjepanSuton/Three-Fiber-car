import React from "react";

import { Html } from "@react-three/drei";

import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";

interface IInfo3Props {
  cameraPosition: number;
  setCameraPosition: any;
  setCarColor: any;
}

const Info4: React.FC<IInfo3Props> = ({
  cameraPosition,
  setCameraPosition,
  setCarColor,
}) => {
  const [showButton, setShowButton] = React.useState(false);
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (cameraPosition !== 4) {
      setTimeout(() => {
        setShowButton(false);
      }, 1500);
    }
  }, [cameraPosition]);

  return (
    <>
      <Html as="div">
        <AnimatePresence>
          {cameraPosition === 4 && (
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
                bottom: width && width <= 700 ? -70 : "-2rem",
                width: width && width <= 700 ? 250 : 550,
              }}
            >
              <motion.h1
                onAnimationComplete={() => setShowButton(true)}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 2.5 }}
              >
                A large array of collors
              </motion.h1>
              {["⚫️ ", "🟣 ", "⚪️ ", "🔵 ", "🟡 "].map((color) => {
                return (
                  <motion.button
                    key={color}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    onClick={() => setCarColor(color)}
                    style={{
                      cursor: "pointer",
                      fontFamily: "Audiowide",
                      fontSize: width && width <= 700 ? "1rem" : "1.5rem",

                      backgroundColor: "unset",
                      color: "#ced4de",
                      border: "none",
                    }}
                  >
                    {color}
                  </motion.button>
                );
              })}
              {showButton && (
                <motion.h1
                  onClick={() => setCameraPosition(-90)}
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
                  Go to playground
                </motion.h1>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </>
  );
};

export default Info4;
