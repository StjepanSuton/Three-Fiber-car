import { Html } from "@react-three/drei";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IInfo0Props {
  cameraPosition: number;
  setCameraPosition: any;
}

const Info0: React.FC<IInfo0Props> = ({
  cameraPosition,
  setCameraPosition,
}) => {
  const [showButton, setShowButton] = React.useState(false);
  return (
    <>
      <Html as="div">
        <AnimatePresence>
          {cameraPosition === 0 && (
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
                transition={{ duration: 2, delay: 3 }}
              >
                Welcome to the new age of the auto industry
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
                    fontSize: "1.5rem",
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

export default Info0;
