import React from "react";
import Tooltip from "react-tooltip-lite";
import PaginationBar from "./PaginationBar";
function About() {
  return (
    <div>
      <Tooltip content="This is About page">
        <h1  style={{marginLeft:"600px "}}>About Page </h1>
      </Tooltip>
      <PaginationBar />
    </div>
  );
}

export default About;
