import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavSys from "../components/NavSys";
// import BoatDraw from "../components/BoatDraw";

function GeneralLayout() {
  return (
    <>
      <NavSys />
      <Outlet />
    </>
  );
}

export default GeneralLayout;
