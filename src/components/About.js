import React from "react";
import Tooltip from "react-tooltip-lite";
import PaginationBar from "./PaginationBar";
function About() {
  return (
    <div>
      <Tooltip content="This is Home page">
        <h1>About </h1>
      </Tooltip>
      <PaginationBar />
    </div>
  );
}

export default About;
