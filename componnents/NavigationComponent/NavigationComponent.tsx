import Link from "next/link";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

interface INavigationComponent {
  setCameraPosition: any;
  setPlaygroundIsActive: any;
}

const NavigationComponent: React.FC<INavigationComponent> = ({
  setCameraPosition,
  setPlaygroundIsActive,
}) => {
  const { width } = useWindowSize();

  return (
    <nav
      style={{
        position: "fixed",
        zIndex: 90,
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(5.5485px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: width && width <= 700 ? "0.5rem" : "1.25rem",
        color: "white",
      }}
    >
      <h2
        onClick={() => {
          setPlaygroundIsActive(false);
          setCameraPosition(0);
        }}
        style={{ cursor: "pointer", fontWeight: 700 }}
      >
        TOUR
      </h2>
      <h2
        style={{ cursor: "pointer", fontWeight: 700 }}
        onClick={() => {
          setCameraPosition(-90);
        }}
      >
        PLAYGROUND
      </h2>
      <Link
        target={"_blank"}
        href={"https://www.ferrari.com/en-EN/magazine?from=GWpost_MAGAZINE"}
      >
        <h2 style={{ cursor: "pointer", fontWeight: 700 }}>UNIVERSE</h2>
      </Link>
      <Link target={"_blank"} href={"https://www.ferrari.com/en-HR/formula1"}>
        <h2 style={{ cursor: "pointer", fontWeight: 700 }}>ABOUT</h2>
      </Link>
    </nav>
  );
};

export default NavigationComponent;
