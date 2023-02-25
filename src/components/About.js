import React from "react";
// import {Tooltip} from "react-tooltip";
import PaginationBar from "./PaginationBar";
function About() {
  return (
    <div>
      {/* <Tooltip data-tip="This is About page">
        <h1  style={{marginLeft:"600px "}}>About Page </h1>
      </Tooltip> */}
      <h1 style={{marginLeft:"600px "}} data-tip="This is About page">About Page</h1>
      <PaginationBar />
    </div>
  );
}

export default About;
