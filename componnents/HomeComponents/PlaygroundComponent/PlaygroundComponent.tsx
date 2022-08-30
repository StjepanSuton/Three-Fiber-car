import { Html } from "@react-three/drei";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";

interface IPlaygroundComponent {
  enableDrag: boolean;
  enableZoom: boolean;
  playgroundIsActive: boolean;
  setCarColor: any;
  setEnableZoom: any;
  setEnableDrag: any;
  setCostumSpeed: any;
}

const PlaygroundComponent: React.FC<IPlaygroundComponent> = ({
  setCarColor,
  enableDrag,
  enableZoom,
  playgroundIsActive,
  setEnableZoom,
  setEnableDrag,
  setCostumSpeed,
}) => {
  const { width } = useWindowSize();
  const [IsDraggable, setIsDragable] = React.useState(false);
  React.useEffect(() => {
    if (!playgroundIsActive) {
      setCostumSpeed(1);
    }
  }, [playgroundIsActive]);
  return (
    <Html
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        display: "flex",
      }}
    >
      <AnimatePresence>
        {playgroundIsActive && (
          <motion.div
            drag={IsDraggable}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              top: width && width ? -300 : -300,
              left: width && width ? -100 : -550,
              height: width && width ? 120 : 200,
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(5.5485px)",
              padding: width && width ? "0.5rem" : "1rem",
              fontSize: width && width ? 12 : 36,
            }}
          >
            <div>
              <label>Enable camera zoom</label>
              <input
                onChange={() => {
                  setEnableZoom(!enableZoom);
                }}
                type={"checkbox"}
              />
            </div>
            <div>
              <label>Enable camera drag</label>
              <input
                onChange={() => {
                  setEnableDrag(!enableDrag);
                }}
                type={"checkbox"}
              />
            </div>
            <div>
              <label>Car color</label>
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
            </div>
            <div>
              <label>Speed</label>
              <input
                onChange={(e) => setCostumSpeed(Number(e.currentTarget.value))}
                min={0}
                step={0.1}
                max={20}
                type={"range"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
};

export default PlaygroundComponent;
