import React from "react";

import { Html } from "@react-three/drei";

import { AnimatePresence, motion } from "framer-motion";

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
                fontSize: "1rem",
                position: "relative",
                width: 550,
              }}
            >
              <motion.h1
                onAnimationComplete={() => setShowButton(true)}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 2.5 }}
              >
                Chose from a large array of collors Drag your mouse to look
                around and enjoy the show
              </motion.h1>
              {["⚫️ ", "🟣 ", "⚪️ ", "🔵 ", "🟡 "].map((color) => {
                return (
                  <motion.button
                    key={color}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    onClick={() => setCarColor(color)}
                    style={{
                      cursor: "pointer",
                      fontFamily: "Audiowide",
                      fontSize: "1.5rem",
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
                <motion.button
                  onClick={() => setCameraPosition(cameraPosition + 1)}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  style={{
                    cursor: "pointer",
                    fontFamily: "Audiowide",
                    fontSize: "1.5rem",
                    backgroundColor: "unset",
                    color: "#ced4de",
                    border: "none",
                  }}
                >
                  Click here to close
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </>
  );
};

export default Info4;
