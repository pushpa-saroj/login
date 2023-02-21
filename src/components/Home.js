import React from "react";
import { Draggable } from "drag-react";

import "../App.css";
import Contact from "./Contact";
function Home() {
  return (
    <div>
      <Draggable>
        <div className="drag">dragging this line view for home page</div>
      </Draggable>
      <br />
      <div>
        <h1>Home page</h1>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
