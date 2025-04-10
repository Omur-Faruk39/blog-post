import React from "react";
import { Outlet } from "react-router";

function root() {
  return (
    <>
      <h1>My Template</h1>
      <Outlet />
    </>
  );
}

export default root;
