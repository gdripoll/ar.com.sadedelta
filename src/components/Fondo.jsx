import React from "react";

function Fondo({ image }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    />
  );
}

export default Fondo;
